<script setup lang="ts">
import { onMounted, ref, onUnmounted, reactive, watch } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let context: CanvasRenderingContext2D | null = null

const simulationParams = reactive({
  NUMBER: 1000,
  PARTICLE_TYPES: 6,
  DT: 0.1,
  FRICTION_HALF_LIFE: 0.010,
  R_MAX: 0.1,
  MAX_FORCE: 10.0,
  MIN_DISTANCE: 0.001,
  HIDE_UI: false,
  IS_3D: false,
})

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function makeRandomMatrix(): number[][] {
  const types = simulationParams.PARTICLE_TYPES
  const matrix: number[][] = []
  for (let i = 0; i < types; i++) {
    const row: number[] = []
    for (let j = 0; j < types; j++) {
      row.push(Math.random() * 2 - 1) * 0.5
    }
    matrix.push(row)
  }
  return matrix
}

let matrix = makeRandomMatrix()
let frictionFactor = Math.pow(0.5, simulationParams.DT / simulationParams.FRICTION_HALF_LIFE)

watch([() => simulationParams.FRICTION_HALF_LIFE, () => simulationParams.DT], () => {
  frictionFactor = Math.pow(0.5, simulationParams.DT / simulationParams.FRICTION_HALF_LIFE)
})

// Initialize particle arrays
let colours = new Int32Array(simulationParams.NUMBER)
let positionsX = new Float32Array(simulationParams.NUMBER)
let positionsY = new Float32Array(simulationParams.NUMBER)
let positionsZ = new Float32Array(simulationParams.NUMBER)
let velocitiesX = new Float32Array(simulationParams.NUMBER)
let velocitiesY = new Float32Array(simulationParams.NUMBER)
let velocitiesZ = new Float32Array(simulationParams.NUMBER)

// Pre-calculate colors
let colorCache: string[] = []
function updateColorCache() {
  const types = simulationParams.PARTICLE_TYPES
  colorCache = new Array(types)
  for(let i = 0; i < types; i++) {
    colorCache[i] = `hsl(${360 * (i / types)},100%,50%)`
  }
}
updateColorCache()

function resetSimulation() {
  const num = simulationParams.NUMBER
  const types = simulationParams.PARTICLE_TYPES
  
  colours = new Int32Array(num)
  positionsX = new Float32Array(num)
  positionsY = new Float32Array(num)
  positionsZ = new Float32Array(num) 
  velocitiesX = new Float32Array(num)
  velocitiesY = new Float32Array(num)
  velocitiesZ = new Float32Array(num) 
  matrix = makeRandomMatrix()
  updateColorCache()

  for (let i = 0; i < num; i++) {
    colours[i] = Math.floor(Math.random() * types)
    positionsX[i] = Math.random()
    positionsY[i] = Math.random()
    positionsZ[i] = Math.random()
    velocitiesX[i] = 0
    velocitiesY[i] = 0
    velocitiesZ[i] = 0 
  }
}

function force(distance: number, interactionStrength: number): number {
  const repulsionRange = 0.3

  if (distance < repulsionRange) {
    const x = distance / repulsionRange
    return (x * x - 1.0)
  } else if (repulsionRange < 3 && distance < 1) {
    const normalisedDistance = 2.0 * distance - 1.0 - repulsionRange
    const interactionRange = 1.0 - repulsionRange
    return interactionStrength * (1.0 - Math.abs(normalisedDistance) / interactionRange)
  }
  return 0.0
}

function update() {
  // Cache reactive values
  const dt = simulationParams.DT
  const maxForce = simulationParams.MAX_FORCE
  const rMax = simulationParams.R_MAX
  const minDist = simulationParams.MIN_DISTANCE
  const num = simulationParams.NUMBER
  const is3D = simulationParams.IS_3D

  for (let i = 0; i < num; i++) {
    let totalForceX = 0
    let totalForceY = 0
    let totalForceZ = 0 

    for (let j = 0; j < num; j++) {
      if (j === i) continue

      let rx = positionsX[j] - positionsX[i]
      let ry = positionsY[j] - positionsY[i]
      let rz = is3D ? positionsZ[j] - positionsZ[i] : 0

      if (rx > 0.5) rx -= 1.0
      else if (rx < -0.5) rx += 1.0
      if (ry > 0.5) ry -= 1.0
      else if (ry < -0.5) ry += 1.0
      if (is3D) {  // Wrap Z if 3D
        if (rz > 0.5) rz -= 1.0
        else if (rz < -0.5) rz += 1.0
      }

      const r = Math.hypot(rx, ry, rz)

      if (r > minDist && r < rMax) {
        let f = force(r / rMax, matrix[colours[i]][colours[j]])
        f = clamp(f, -maxForce, maxForce)

        const rxf = rx / r * f
        const ryf = ry / r * f
        const rzf = is3D ? rz / r * f : 0

        totalForceX += rxf
        totalForceY += ryf
        totalForceZ += rzf
      }
    }

    totalForceX = clamp(totalForceX * rMax, -maxForce, maxForce)
    totalForceY = clamp(totalForceY * rMax, -maxForce, maxForce)
    totalForceZ = is3D ? clamp(totalForceZ * rMax, -maxForce, maxForce) : 0

    const newVelX = velocitiesX[i] * frictionFactor + totalForceX * dt
    const newVelY = velocitiesY[i] * frictionFactor + totalForceY * dt
    const newVelZ = is3D ? velocitiesZ[i] * frictionFactor + totalForceZ * dt : 0

    velocitiesX[i] = velocitiesX[i] * 0.7 + newVelX * 0.3
    velocitiesY[i] = velocitiesY[i] * 0.7 + newVelY * 0.3
    if (is3D) {
      velocitiesZ[i] = velocitiesZ[i] * 0.7 + newVelZ * 0.3
    }
  }

  for (let i = 0; i < num; i++) {
    positionsX[i] += velocitiesX[i] * dt
    positionsY[i] += velocitiesY[i] * dt
    if (is3D) {
      positionsZ[i] += velocitiesZ[i] * dt
    }

    positionsX[i] = positionsX[i] - Math.floor(positionsX[i])
    positionsY[i] = positionsY[i] - Math.floor(positionsY[i])
    if (is3D) {
      positionsZ[i] = positionsZ[i] - Math.floor(positionsZ[i])
    }
  }
}

function updateCanvasSize() {
  if (!canvas.value) return
  const dpr = window.devicePixelRatio || 1
  canvas.value.width = window.innerWidth * dpr
  canvas.value.height = window.innerHeight * dpr
  
  if (context) {
    context.scale(dpr, dpr)
  }
}

function loop() {
  if (!context || !canvas.value) return

  update()
  
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.value.width, canvas.value.height)

  // Batch by color type
  const types = simulationParams.PARTICLE_TYPES
  const num = simulationParams.NUMBER
  const width = canvas.value.width
  const height = canvas.value.height
  const is3D = simulationParams.IS_3D

  // Sort particles by Z depth if 3D
  const drawOrder = Array.from({ length: num }, (_, i) => i)
  if (is3D) {
    drawOrder.sort((a, b) => positionsZ[b] - positionsZ[a])
  }

  for (let colorType = 0; colorType < types; colorType++) {
    context.beginPath()
    context.fillStyle = colorCache[colorType]
    
    for (let i = 0; i < num; i++) {
      if (colours[i] === colorType) {
        const screenX = positionsX[i] * width
        const screenY = positionsY[i] * height
        // Scale based on Z depth
        const scale = is3D ? 0.5 + positionsZ[i] : 1
        context.moveTo(screenX, screenY)
        context.arc(screenX, screenY, 3.0 * scale, 0, 2 * Math.PI)
      }
    }
    context.fill()
  }

  requestAnimationFrame(loop)
}
onMounted(() => {
  if (canvas.value) {
    context = canvas.value.getContext('2d', { 
      alpha: false,
      desynchronized: true
    })
    
    if (context) {
      context.imageSmoothingEnabled = false
      resetSimulation()
      updateCanvasSize()
      window.addEventListener('resize', updateCanvasSize)
      requestAnimationFrame(loop)
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCanvasSize)
})
</script>

<template>
  <canvas ref="canvas" id="particle-canvas"></canvas>
  <div style="position: absolute; bottom: 10px; right: 10px; display: flex; gap: 1em;">
    <label style="font-size: 18px;">Hide UI</label>
      <input 
        type="checkbox" 
        v-model.number="simulationParams.HIDE_UI" 
        min="100" 
        max="5000" 
        step="100"
      >
  </div>
  <div v-if="simulationParams.HIDE_UI === false" class="controls">
    <div class="control-group">
      <label>Particles: {{ simulationParams.NUMBER }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.NUMBER" 
        min="100" 
        max="5000" 
        step="100"
        @input="resetSimulation"
      >
    </div>

    <div class="control-group">
      <label>Time Step (DT): {{ simulationParams.DT.toFixed(3) }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.DT" 
        min="0.001" 
        max="0.2" 
        step="0.001"
      >
    </div>

    <div class="control-group">
      <label>Max Force: {{ simulationParams.MAX_FORCE.toFixed(1) }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.MAX_FORCE" 
        min="1" 
        max="50" 
        step="0.1"
      >
    </div>

    <div class="control-group">
      <label>Interaction Radius: {{ simulationParams.R_MAX.toFixed(3) }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.R_MAX" 
        min="0.01" 
        max="0.5" 
        step="0.001"
      >
    </div>

    <div class="control-group">
      <label>Friction Half Life: {{ simulationParams.FRICTION_HALF_LIFE.toFixed(3) }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.FRICTION_HALF_LIFE" 
        min="0.001" 
        max="0.1" 
        step="0.001"
      >
    </div>

    <div class="control-group">
      <label>Particle Types: {{ simulationParams.PARTICLE_TYPES }}</label>
      <input 
        type="range" 
        v-model.number="simulationParams.PARTICLE_TYPES" 
        min="2" 
        max="12" 
        step="1"
        @input="resetSimulation"
      >
    </div>

    <div class="toggle-group">
      <label>3D Mode</label>
      <input 
        type="checkbox" 
        v-model="simulationParams.IS_3D"
        @change="resetSimulation"
      >
    </div>
  </div>
</template>

<style scoped>
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.controls {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 300px;
}

.control-group {
  margin-bottom: 15px;
}

.control-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.control-group input {
  width: 100%;
  margin-top: 5px;
}

.toggle-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 1em;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.toggle-group {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.toggle-group label {
  font-size: 18px;
}

:global(body) {
  margin: 0;
  overflow: hidden;
}
</style>