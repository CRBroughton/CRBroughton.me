<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";
import Button from "../components/Button.vue";
import Paragraph from '../components/Paragraph.vue'
import Atom from '../components/Atom.vue'

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        targets: '.heading-1',
        opacity: 1,
        duration: 300,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.heading-2',
        opacity: 1,
        duration: 300,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.heading-3',
        opacity: 1,
        duration: 300,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.intro-atomic-design',
        opacity: 1,
        left: 400,
        top: 200,
        duration: 1000,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.colour-atoms, .colour-bg-heading',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    // {
    //     targets: '.intro-paragraph-1, .intro-paragraph-2',
    //     opacity: 1,
    //     easing: 'easeInOutCubic',
    //     autoplay: false,
    //     duration: 1000,
    // },
    // {
    //     targets: '.my-container',
    //     easing: 'easeInOutCubic',
    //     autoplay: false,
    //     duration: 5000,
    //     keyframes: [
    //         { translateY: -40 },
    //         { scale: 0.4 },
    //         { translateY: 0 },
    //         { scale: 1 },

    //     ],
    // },

] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides :duration="120">
        <div class="w-screen h-screen flex">
            <div class="w-full flex justify-center items-center text-white outline-double outline-2">
                <h1 class="colour-bg-heading font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">Colour</h1>

                <div
                    class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-14 opacity-1">
                    <Atom absolute colour="bg-orange-400" />
                    <Heading size="slide-intro">
                        Atomic Design
                    </Heading>
                    <Heading class="heading-1 opacity-0" size="h2">The smallest possible atomic part</Heading>
                    <Heading class="heading-2 opacity-0" size="h2">Atoms can be colours, spacing, fonts</Heading>
                    <Heading class="heading-3 opacity-0" size="h2">Molecular structures (components) are built with Atoms</Heading>
                </div>


                <div
                    class="colour-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center ">
                    <div class="flex gap-4">
                        <Atom colour="bg-red-400" />
                        <Atom colour="bg-green-400" />
                        <Atom colour="bg-blue-400" />
                        <Atom colour="bg-slate-500" />

                    </div>
              

                </div>

                <!-- <Heading size="slide-intro" class="
                  introduction-heading
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
                    Atomic Design
                </Heading> -->

                <!-- <ul class="list-disc absolute left-[100px] top-[160px] opacity-0 intro-paragraph-1">
                    <li>
                        <Heading size="h2">The smallest possible atomic part of a given application</Heading>
                    </li>
                    <li>
                        <Heading size="h2">Atoms can be colours, spacing, fonts</Heading>
                    </li>
                    <li>
                        <Heading size="h2">Molecular structures (components) are built with Atoms</Heading>
                    </li>
                </ul> -->


            </div>
        </div>
        <!-- <div class="text-white flex gap-4 w-full">
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
            <div class="my-container ml-[500px] bg-white border-black border-4 w-[500px] h-[500px]">
                <div class="w-[52px] h-[52px] bg-red-500">
                    
                </div>
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
        </div> -->
    </SlideArena>
</template>
