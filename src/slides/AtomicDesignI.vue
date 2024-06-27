<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";
import Button from "../components/Button.vue";
import Paragraph from '../components/Paragraph.vue'

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
        duration: 1000,
    },
    {
        targets: '.box',
        easing: 'easeInOutCubic',
        autoplay: false,
        duration: 5000,
        // keyframes: [
        //     { translateY: -40 },
        //     { scale: 0.4 },
        //     { translateY: 0 },
        //     { scale:1 },

        // ],
    },

] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides :duration="120">
        <div class="text-white flex gap-4 w-full">
            <Heading size="slide-intro"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 introduction-heading">
                Atomic Components
            </Heading>
            <div class="absolute left-[100px] top-[200px] opacity-0 intro-paragraph-1">
                <Heading size="h2">The smallest possible atomic part</Heading>
            </div>
            <div class="absolute left-[100px] top-[230px] opacity-0 intro-paragraph-2">
                <Heading size="h2">The smallest possible atomic part</Heading>
            </div>
            <div class="box relative min-w-[400px] min-h-[500px] bg-slate-200 rounded-xl">
                <div class="flex absolute bottom-0">
                    <Button theme="primary" class="bottom-0 mb-4 ml-4">
                        <Paragraph class="font-semibold">
                            More Info
                        </Paragraph>
                    </Button>
                    <Button theme="warning" class="bottom-0 mb-4 ml-4">
                        <Paragraph class="font-semibold">
                            Cancel
                        </Paragraph>
                    </Button>
                </div>
            </div>
        </div>
    </SlideArena>
</template>
