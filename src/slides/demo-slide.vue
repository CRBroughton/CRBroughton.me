<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        targets: '.introduction-heading',
        left: 300,
        top: 100,
        duration: 1000,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.intro-paragraph-1, .intro-paragraph-2',
        opacity: 1,
        easing: 'easeInOutCubic',
        autoplay: false,
        keyframes: [
            { translateY: -40 },
        ],
    },
] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides>
        <div class="text-white flex gap-4 w-full">
            <div class="w-full h-screen flex items-center justify-center">
                <div class="flex flex-col gap-8">
                    <Heading size="slide-intro"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 introduction-heading">
                        Atomic Components
                    </Heading>
                    <ol>
                        <li>
                            <div class="absolute left-[100px] top-[200px] opacity-0 intro-paragraph-1">
                                <Heading size="h2">The smallest possible atomic part</Heading>
                            </div>
                            <div class="absolute left-[100px] top-[230px] opacity-0 intro-paragraph-2">
                                <Heading size="h2">The smallest possible atomic part</Heading>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </SlideArena>
</template>
