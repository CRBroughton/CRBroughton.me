<script setup lang="ts">
import { ref } from "vue";
import Heading from "../components/Heading.vue";
import SlideArena from '../components/SlideArena.vue'
import anime from "animejs";
import Atom from '../components/Atom.vue'
import { useColours } from '../atoms/colours'
import Stars from "../components/Stars.vue";
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import Image from '../components/Image.vue'
import CardParagraph from "../components/CardParagraph.vue";
const { present_atom, primary, secondary, warning, slate_bg, slate_text } = useColours()

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        targets: '.cosmic-voyage-introduction',
        scale: { value: 1, duration: 1000 },
        opacity: { value: 1, delay: 2000, duration: 1000 },
        // scale: { value: 1, duration: 8000 },
        // opacity: { value: 1, delay: 2000, duration: 4000 },
        easing: 'easeInOutQuad',
    },
    {
        targets: '.stars',
        opacity: 0,
        hide: true,
    },
    {
        targets: '.cosmic-voyage-introduction',
        opacity: 0,
    },
    {
        targets: '.intro-component',
        opacity: 1,
    },
    {
        targets: '.intro-component',
        opacity: 0,
    },
    {
        targets: '.intro-atomic-design',
        opacity: 1,
        slideHeading: "Introduction",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.intro-atomic-design',
        opacity: 0,
    },
    {
        targets: '.colour-atoms, .colour-bg-heading',
        opacity: 1,
        initHide: true,
        hide: true,
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
    {
        targets: '.spacing-atoms, .spacing-bg-heading',
        opacity: 0,
        duration: 600,
    }, 
    {
        targets: '.intro-atomic-design-2',
        opacity: 1,
        slideHeading: "Introduction",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.intro-atomic-design-2',
        left: 800,
        top: 200,
        duration: 1000,
    },
    {
        targets: '.heading-1',
        opacity: 1,
        slideHeading: "Tokens",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        targets: '.heading-2',
        opacity: 1,
        slideHeading: "Tokens",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.heading-3',
        opacity: 1,
        slideHeading: "Colours",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        targets: '.heading-4',
        opacity: 1,
        slideHeading: "Colours",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

] satisfies anime.AnimeAnimParams[]
</script>

<template>
    <SlideArena :slides :duration="120">
        <div class="w-screen h-screen absolute overflow-hidden flex bg-black text-white">

            <!-- Stars -->
            <Stars class="stars" />

            <!-- Introduction - Cosmic Voyage -->
            <div class="cosmic-voyage-introduction absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%) scale(10);">
                <Heading size="slide-intro">
                    A Cosmic Voyage
                </Heading>
                <Heading size="h1">
                    Through Front-end Development
                </Heading>
            </div>


            <!-- Need a section for the component -->


            <div
                class="intro-component gap-4 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
                <Card>
                    <template #image>
                        <Image src="https://www.giftpro.co.uk/wp-content/uploads/2021/06/Tillo-Header.jpg" />
                    </template>
                    <template #title>
                        <CardParagraph theme="dark">A Tillo gift card
                        </CardParagraph>
                    </template>
                    <template #subtitle>
                        <p>Surprise and delight your family or friends</p>
                    </template>
                    <template #buttons>
                        <Button theme="primary">Buy</Button>
                        <Button theme="secondary">Details</Button>
                    </template>
                </Card>
            </div>

            <!-- The Atom -->
            <div
                class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">

                <Atom absolute class="left-[-150px] top-[-20px]" :colour="present_atom" />
                <Heading size="slide-intro">
                    Tokens
                </Heading>
            </div>

            <div
                class="intro-atomic-design-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">

                <Atom absolute class="left-[-150px]" :colour="present_atom" />
                <Heading size="slide-intro">
                    Tokens
                </Heading>
                <div class="atom-headings">

                    <Heading class="heading-1 opacity-0" size="h1">Tokens store values</Heading>
                    <Heading class="heading-2 opacity-0" size="h1">Can re-use tokens across the application</Heading>
                    <Heading class="heading-3 opacity-0" size="h1">Tokens can be colour, typography, and spacing related
                    </Heading>
                    <Heading class="heading-4 opacity-0" size="h1">Tokens help create a common language between Design, Engineering and Marketing
                    </Heading>
                </div>
            </div>

            <div class="  w-full flex justify-center">

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
