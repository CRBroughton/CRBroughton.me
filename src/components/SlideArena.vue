<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { useSlides } from '../createSlides'
import anime from "animejs";
import { ArrowBigLeft, ArrowBigRight, ChevronRight, ChevronsRight } from 'lucide-vue-next'
import { useStorage } from '@vueuse/core'

const running = ref(false)
const timer = useStorage('slide-duration-skip', true)
let back: () => void
let forward: () => void
function run(cb: () => void) {
    if (running.value !== true) {
        cb()
    }
}
const props = defineProps<{ slides: anime.AnimeAnimParams[], duration?: number }>()

onMounted(() => {
    const states: anime.AnimeInstance[] = []

    for (let index = 0; index < props.slides.length; index++) {
        states.push(anime({
            ...props.slides[index],
            duration: timer.value === true ? props.duration ?? 1 : props.slides[index].duration,
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

const timerButtonClasses = computed(() => {
    return {
        'text-red-500': timer.value === false,
        'text-green-500': timer.value === true,

    }
})

function skipDuration() {
    localStorage.setItem('slide-duration-skip', String(!timer.value))
    window.location.reload()
}
</script>

<template>
    <div>
        <slot />
        <div class="flex absolute bottom-0 right-0 p-4">
            <button :class="timerButtonClasses" :disabled="running">
                <component :is="timer === true ? ChevronsRight : ChevronRight" class="w-10 h-10"    @click="skipDuration">
                </component>
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigLeft class="w-10 h-10 text-white" @click="run(back)" />
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigRight class="w-10 h-10 text-white" @click="run(forward)" />
            </button>
        </div>
    </div>
</template>