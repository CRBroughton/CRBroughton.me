<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        target: 'introduction-heading',
        scale: 0.4,
        paddingBottom: '500px',
        duration: 1000,
        easing: 'linear',
        autoplay: false,
    },
    {
        target: 'test-button',
        translateX: 500,
        duration: 1000,
        easing: 'linear',
        autoplay: false,
    },
    {
        target: 'test-button',
        translateX: -500,
        duration: 1000,
        easing: 'linear',
        autoplay: false,
    }
]
</script>

<template>
    <SlideArena :slides="slides">
        <div class="text-white flex gap-4 w-full">
            <div class="w-full h-screen flex items-center justify-center">
                <div class="flex flex-col gap-8">
                    <Heading id="introduction-heading" size="h1" style="scale: 2.4">Atomic Components</Heading>
                    <button id="test-button" class="bg-slate-200 text-black py-1 px-8 rounded-lg">Click</button>
                </div>
            </div>
        </div>
    </SlideArena>
</template>
