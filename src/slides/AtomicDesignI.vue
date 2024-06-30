<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";
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
        targets: '.atom-headings',
        opacity: 0,
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
        duration: 600,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.colour-atoms, .colour-bg-heading',
        opacity: 0,
        duration: 600,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.type-atoms, .type-bg-heading',
        opacity: 1,
        duration: 600,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.type-atoms-foxes',
        width: 0,
        duration: 600,
        easing: 'easeInOutCubic',
        autoplay: false,
    },
    {
        targets: '.type-atoms-foxes-tokens',
        width: 400,
        duration: 600,
        easing: 'easeInOutCubic',
        autoplay: false,
    },

] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides :duration="120">
        <div class="w-screen h-screen flex">
            <div class="w-full flex justify-center items-center text-white outline-double outline-2">
                <h1
                    class="colour-bg-heading font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Colour</h1>
                <div
                    class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-14 opacity-1">
                    <Atom absolute colour="bg-orange-400" />
                    <Heading size="slide-intro">
                        Atomic Design
                    </Heading>
                    <div class="atom-headings">
                        <Heading class="heading-1 opacity-0" size="h2">The smallest possible atomic part</Heading>
                        <Heading class="heading-2 opacity-0" size="h2">Atoms can be colours, spacing, fonts</Heading>
                        <Heading class="heading-3 opacity-0" size="h2">Molecular structures (components) are built with
                            Atoms</Heading>
                    </div>
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

             
                <div
                    class="type-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                        <div class="type-atoms-foxes absolute flex flex-col gap-4 overflow-y-scroll whitespace-nowrap no-scrollbar">
                        <Heading size="h1">The quick brown fox jumps over the lazy dog</Heading>
                        <Heading size="h2">The quick brown fox jumps over the lazy dog</Heading>
                        <Heading size="h3">The quick brown fox jumps over the lazy dog</Heading>
                    </div>

                    <div class="type-atoms-foxes-tokens absolute flex flex-col gap-4 overflow-y-scroll whitespace-nowrap no-scrollbar w-0">
                        <Heading size="h1">$heading_1</Heading>
                        <Heading size="h2">$heading_2</Heading>
                        <Heading size="h3">$heading_3</Heading>
                    </div>
                    <h1
                    class="type-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Fonts</h1>
                    
                </div>
            </div>
        </div>
    </SlideArena>
</template>
