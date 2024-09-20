<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { useSlides } from '../createSlides'
import anime from "animejs";
import { ArrowBigLeft, ArrowBigRight, ChevronRight, ChevronsRight, Text, Projector } from 'lucide-vue-next'
import { useStorage } from '@vueuse/core'
import Heading from "./Heading.vue"

const running = ref(false)
const timer = useStorage('slide-duration-skip', true)
let direction: 'back' | 'forwards' = 'forwards'
let back: () => void
let forward: () => void
function run(cb: () => void, dir: typeof direction) {
    direction = dir
    if (running.value !== true) {
        cb()
    }
}

type Slide = anime.AnimeAnimParams[] & {
    slideHeading?: string
    slideText?: string
    autoplay?: boolean
    hide?: boolean
    initHide?: boolean
    addClasses?: string[]
    removeClasses?: string[]
    customUpdate?: () => void
}[]
const props = defineProps<{ slides: Slide, duration?: number }>()
const emit = defineEmits<{
    currentSlide: [currentSlideID: string]
}>()
onMounted(() => {
    const states: anime.AnimeInstance[] = []

    for (let index = 0; index < props.slides.length; index++) {
        states.push(anime({
            ...props.slides[index],
            duration: timer.value === true ? props.duration ?? 1 : props.slides[index].duration ? props.slides[index].duration : 300,
            targets: document.querySelectorAll(String(props.slides[index].targets)),
            autoplay: props.slides[index].autoplay ? props.slides[index].autoplay : false,
            easing: props.slides[index].easing ?? 'easeInOutCubic',
            changeBegin: function (anim) {
                const addClasses = props.slides[index].addClasses
                if (addClasses && direction === 'forwards') {
                    anim.animatables.forEach((animatable) => {
                        if (animatable.target.classList) {
                            animatable.target.classList.add(...addClasses)
                        }
                    })
                }

                if (addClasses && direction === 'back') {
                    anim.animatables.forEach((animatable) => {
                        if (animatable.target.classList) {
                            animatable.target.classList.remove(...addClasses)
                        }
                    })
                }

                const removeClasses = props.slides[index].removeClasses
                if (removeClasses && direction === 'forwards') {
                    anim.animatables.forEach((animatable) => {
                        if (animatable.target.classList) {
                            animatable.target.classList.remove(...removeClasses)
                        }
                    })
                }

                if (removeClasses && direction === 'back') {
                    anim.animatables.forEach((animatable) => {
                        if (animatable.target.classList) {
                            animatable.target.classList.add(...removeClasses)
                        }
                    })
                }

            },

            // changeBegin: function (anim) {
            //     anim.animatables.forEach((animatable) => {
            //         if (animatable.target.style.opacity === '0' && direction === 'back') {
            //             animatable.target.style.opacity = '1'
            //         }
            //     })
            // },
            changeComplete: function (anim) {
                if (props.slides[index].hide === true) {
                    anim.animatables.forEach((animatable) => {
                        if (animatable.target.classList)
                            if (animatable.target.style.opacity === '0') animatable.target.classList.add('hidden');
                            else animatable.target.classList.remove('hidden');
                    });
                    const update = props.slides[index].customUpdate
                    if (update) {
                        update()
                    }
                }
            }
        }))

    }
    
    // // Set initial hide if available on the slide info
    for (let index = 0; index < states.length; index++) {
        states[index].animatables.forEach(animatable => {
           if (props.slides[index].initHide === true) {
            animatable.target.classList.add('hidden')
           }
        });
    }
    const { callSlide, revert, isRunning, currentSlideID } = useSlides({
        states,
    })
    forward = callSlide
    back = revert

    watch(() => isRunning.value, () => {
        running.value = isRunning.value
    })

    watch(() => currentSlideID.value, () => {
        emit('currentSlide', currentSlideID.value)
    })


    document.addEventListener("keydown", async (event) => {
        if (running.value !== true) {
            console.log(event)
            if (event.key === "d" || event.key === 'ArrowRight') {
                run(forward, 'forwards')
            }
            if (event.key === 'a' || event.key === 'ArrowLeft') {
                run(back, 'back')
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
        'text-red-300': timer.value === false,
        'text-green-300': timer.value === true,

    }
})

function skipDuration() {
    localStorage.setItem('slide-duration-skip', String(!timer.value))
    window.location.reload()
}

const showText = ref(false)
</script>

<template>
    <div v-if="showText === false">
        <slot />
    </div>
    <div v-else class="w-full text-white bg-slate-900 container px-10 py-10 lg:px-24 flex flex-col gap-12">
        <div v-for="(slide, index) in slides" :key="index">
            <Heading size="h1">{{ slide.slideHeading }}</Heading>
            <Heading size="h2"> {{ slide.slideText }}</Heading>
        </div>
    </div>
    <div class="w-full flex items-center fixed bottom-0 right-0 p-4">
        <div class="relative mr-auto">
            <h4 class="font-bold text-slate-600">Navigate with A & D</h4>
        </div>
        <button :class="buttonClasses" :disabled="running">
            <component :is="showText === true ? Projector : Text" class="w-10 h-10 text-slate-300"
                @click="showText = !showText" />
        </button>
        <div v-if="showText === false" class="flex">
            <button :class="timerButtonClasses" :disabled="running">
                <component :is="timer === true ? ChevronsRight : ChevronRight" class="w-10 h-10" @click="skipDuration">
                </component>
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigLeft class="w-10 h-10 text-slate-300" @click="run(back, 'back')" />
            </button>
            <button :class="buttonClasses" :disabled="running">
                <ArrowBigRight class="w-10 h-10 text-slate-300" @click="run(forward, 'forwards')" />
            </button>
        </div>
    </div>
</template>