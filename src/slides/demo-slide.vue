<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import Heading from "../components/Heading.vue";
import { useSlides } from '../createSlides'
import anime from "animejs";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-vue-next'

let heading: HTMLElement | null
let testButton: HTMLElement | null
const running = ref(false)
const showAnimatedSlide = ref(false)
let back: () => void
let forward: () => void
function run(cb: () => void) {
    if (running.value !== true){
        cb()
    }
}


onMounted(() => {
    heading = document.getElementById('introduction-heading');
    testButton = document.getElementById('test-button');

    const { callSlide, revert, isRunning } = useSlides({
        states: [anime({
            targets: heading,
            scale: 0.4,
            paddingBottom: '500px',
            duration: 1000,
            easing: 'linear',
            autoplay: false,
        }),
        anime({
            targets: testButton,
            translateX: 500,
            duration: 6000,
            easing: 'linear',
            autoplay: false,

        })]
    })
    watch(() => isRunning.value, (newValue, oldValue) => {
        running.value = isRunning.value
    })
    forward = callSlide
    back = revert

    document.addEventListener("keypress", async (event) => {
        if (running.value !== true) {
            if (event.key === "d") {
                console.log('forward...')
                isRunning.value = true
                console.log(isRunning.value)

                await callSlide()
                isRunning.value = false
                console.log(isRunning.value)

            }
            if (event.key === 'a') {
                isRunning.value = true
                console.log(isRunning.value)

                await revert()
                isRunning.value = false
                console.log(isRunning.value)

            }
        }
    })
})


const buttonClasses = computed(() => {
    return {
        'disabled cursor-not-allowed': running.value === true
    }
})
</script>

<template>
    <div class="text-white flex gap-4 w-full">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="flex flex-col gap-8">
                <Heading id="introduction-heading" size="h1" style="scale: 2.4">Atomic Components</Heading>
                <button id="test-button" class="bg-slate-200 text-black py-1 px-8 rounded-lg">Click</button>
            </div>
        </div>
        <div v-if="showAnimatedSlide" class="w-full h-screen flex items-center justify-start pl-24">
            asdasd
        </div>
        <div class="flex absolute bottom-0 right-0 p-4">
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigLeft class="w-14 h-14" @click="run(back)" />
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigRight class="w-14 h-14" @click="run(forward)" />
            </button>
        </div>
    </div>
</template>
../createSlides