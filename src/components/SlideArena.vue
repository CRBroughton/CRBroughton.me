<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { useSlides } from '../createSlides'
import anime from "animejs";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-vue-next'

const running = ref(false)
let back: () => void
let forward: () => void
function run(cb: () => void) {
    if (running.value !== true) {
        cb()
    }
}
const props = defineProps<{ slides: anime.AnimeAnimParams[] }>()

onMounted(() => {
    const states: anime.AnimeInstance[] = []

    for (let index = 0; index < props.slides.length; index++) {
       states.push(anime({
        ...props.slides[index],
        targets: document.querySelectorAll(String(props.slides[index].targets))
       }))
        
    }

    const { callSlide, revert, isRunning } = useSlides({
        states,
    })
    forward = callSlide
    back = revert

    watch(() => isRunning.value, () => {
        running.value = isRunning.value
    })


    document.addEventListener("keypress", async (event) => {
        if (running.value !== true) {
            if (event.key === "d") {
                await callSlide()
            }
            if (event.key === 'a') {
                await revert()
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
    <div>
        <slot />
        <div class="flex absolute bottom-0 right-0 p-4">
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigLeft class="w-14 h-14 text-white" @click="run(back)" />
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigRight class="w-14 h-14 text-white" @click="run(forward)" />
            </button>
        </div>
    </div>
</template>