<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";
import Atom from '../components/Atom.vue'
import { useColours } from '../atoms/colours'
import Stars from "../components/Stars.vue";
const { present_atom, primary, secondary, warning, slate_bg, slate_text } = useColours()

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        targets: '.cosmic-voyage-introduction',
        opacity: 1,
    },
    {
        targets: '.stars',
        opacity: 0.1,
    },
    {
        targets: '.cosmic-voyage-introduction',
        opacity: 0,
    },
    {
        targets: '.intro-atomic-design',
        opacity: 1,
        slideHeading: "Introduction",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.heading-1',
        opacity: 1,
        hide: false,
        slideHeading: "Tokens",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.heading-2',
        opacity: 1,
        hide: false,
        slideHeading: "Tokens",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.heading-3',
        opacity: 1,
        hide: false,
        slideHeading: "Colours",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.atom-headings',
        opacity: 0,
        slideHeading: "Fonts",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.intro-atomic-design',
        left: 450,
        top: 200,
        duration: 1000,
        slideHeading: "Spacing",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.colour-atoms, .colour-bg-heading',
        opacity: 1,
        duration: 600,
        easing: 'easeInOutCubic',
        slideHeading: "Introduction",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.colour-atoms, .colour-bg-heading',
        opacity: 0,
        duration: 600,
    },
    {
        targets: '.type-atoms, .type-bg-heading',
        opacity: 1,
        duration: 600,
    },
    {
        targets: '.type-atoms, .type-bg-heading',
        opacity: 0,
        duration: 600,
    },
    {
        targets: '.spacing-atoms, .spacing-bg-heading',
        opacity: 1,
        duration: 600,
    },
] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides :duration="120">
        <div class="w-screen h-screen absolute overflow-hidden flex bg-black text-white">

            <!-- Stars -->
            <Stars class="stars" />

            <!-- Introduction - Cosmic Voyage -->
            <div
                class="cosmic-voyage-introduction absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ">
                <Heading size="slide-intro">
                    A Cosmic Voyage
                </Heading>
                <Heading size="h1">
                    Through Front-end Development
                </Heading>
            </div>


            <!-- Need a section for the component -->


            <!-- The Atom -->

            

            <div
            class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ">
                <Atom absolute class="left-[-150px]" :colour="present_atom" />
                <Heading size="slide-intro">
                    Atoms
                </Heading>
                <div class="atom-headings">

                    <Heading class="heading-1 opacity-0" size="h2">The smallest possible atomic part</Heading>
                    <Heading class="heading-2 opacity-0" size="h2">Atoms can be colours, spacing, fonts</Heading>
                    <Heading class="heading-3 opacity-0" size="h2">Molecular structures (components) are built with
                        Atoms
                    </Heading>
                </div>
            </div>

            <div class="w-full flex justify-center">

            <div
                class="colour-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                <div class="flex gap-4">
                    <Atom :colour="primary" />
                    <Atom :colour="secondary" />
                    <Atom :colour="warning" />
                    <Atom :colour="slate_bg" />
                </div>
                <h1
                    class="colour-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Colour</h1>
            </div>
                <div
                    class="type-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                    <div class="type-atoms-foxes flex flex-col gap-4">
                        <Heading size="h1">The quick brown fox jumps over the lazy dog</Heading>
                        <Heading size="h2">The quick brown fox jumps over the lazy dog</Heading>
                        <Heading size="h3">The quick brown fox jumps over the lazy dog</Heading>
                    </div>
                    <h1
                        class="type-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                        Fonts</h1>

                </div>

                <div
                    class="spacing-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                    <div class="type-atoms-foxes flex flex-col justify-center items-center gap-4">
                        <div class="flex justify-center items-center w-14 h-14 rounded-lg
                        bg-stripes-white
                        ">
                            <div class="w-10 h-10 bg-slate-500 rounded-lg"></div>
                        </div>
                        <div class="flex justify-center items-center w-16 h-16 rounded-lg
                        bg-stripes-white
                        ">
                            <div class="w-10 h-10 bg-slate-500 rounded-lg"></div>
                        </div>
                        <div class="flex justify-center items-center w-20 h-20 rounded-lg
                        bg-stripes-white
                        ">
                            <div class="w-10 h-10 bg-slate-500 rounded-lg"></div>
                        </div>
                    </div>
                    <h1
                        class="spacing-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[500px] text-slate-700 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                        Spacing</h1>
                </div>
            </div>
        </div>
    </SlideArena>
</template>


<style scoped>
.bg-stripes-white {
    background-image: linear-gradient(135deg, #ffffffbf 10%, #0000 0, #0000 50%, #ffffffbf 0, #662e2ebf 60%, #0000 0, #0000);
    background-size: 7.07px 7.07px;
}
</style>
