<script setup lang="ts">
import { ref, watch } from "vue";
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
import ConferenceIcon from "../components/ConferenceIcon.vue";
const { present_atom, primary, secondary, warning, slate_bg, slate_text, tillo_emerald, tillo_lapis, tillo_red, pastel_blue, pastel_red, pastel_green, bold_blue, bold_green, bold_red } = useColours()

const slides = ref<anime.AnimeAnimParams[]>([])
slides.value = [
    {
        targets: '.cosmic-voyage-introduction',
        // scale: { value: 1, duration: 1000 },
        // opacity: { value: 1, delay: 2000, duration: 1000 },
        scale: { value: 2, duration: 8000 },
        opacity: { value: 1, delay: 2000, duration: 4000 },
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
        duration: 600,
    },
    {
        targets: '.intro-component',
        opacity: 0,
        duration: 600,
    },
    {
        targets: '.intro-atomic-design-heading',
        opacity: 1,
        width: "100%",
        slideHeading: "Introduction",
        slideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration: 800
    },
    {
        targets: '.intro-atomic-design-heading',
        opacity: 0
    },
    {
        targets: '.intro-atomic-design-heading-2',
        opacity: 1,
        width: '100%',
        duration: 800
    },
    {
        targets: '.intro-atomic-design, .token-example',
        opacity: 0,
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
        targets: '.bold-atoms',
        duration: 600,
        opacity: 1,
    },
    {
        targets: '.blue-atom',
        keyframes: [
            {backgroundColor: "hsl(192, 73%, 70%)"},
            {backgroundColor: "hsl(242, 74%, 61%)"},
            {backgroundColor: "#00b1ff"}
        ],
        loop: true,
        duration: 2000,
    },
    {
        targets: '.green-atom',
        keyframes: [
            {backgroundColor: "hsl(142, 69%, 78%)"},
            {backgroundColor: "hsl(148, 67%, 54%)"},
            {backgroundColor: "#00ff09"}
        ],
        loop: true,
        duration: 2000,
    },
    {
        targets: '.red-atom',
        keyframes: [
            {backgroundColor: "hsl(0, 64%, 90%)"},
            {backgroundColor: "hsl(0, 61%, 52%)"},
            {backgroundColor: "#ff0000"}
        ],
        loop: true,
        duration: 2000,
    },
    {
        targets: '.bold-atoms',
        opacity: 0,
        hide: true,
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
        targets: '.type-atoms, .heading-atoms, .type-bg-heading',
        opacity: 0,
        duration: 600,
    },
    {
        targets: '.spacing-atoms, .spacing-bg-heading',
        opacity: 1,
        duration: 600,
    },
    {
        targets: '.spacing-atoms-atom',
        keyframes: [
            {
                width: '160px',
                height: '160px'
            },
            {
                width: '170px',
                height: '170px'
            },
            {
                width: '200px',
                height: '200px'
            },
            {
                width: '220px',
                height: '220px'   
            },
            {
                width: '200px',
                height: '200px'
            },
            {
                width: '160px',
                height: '160px'
            }
        ],
        loop: true,
        duration: 4000,
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
        targets: '.intro-atomic-design-2',
        opacity: 0,
    },
    {
        targets: '.components-introduction-heading',
        opacity: 1,
        width: '100%',
        duration: 1000,
    },
    {
        targets: '.components-introduction',
        opacity: 0
    },
    {
        targets: '.component-headings, .component-heading-1',
        opacity: 1,
    },
    {
        targets: '.component-heading-2',
        opacity: 1,
    },
    {
        targets: [
            '.component-headings',
            '.components-heading-1',
            '.components-heading-2',
            '.components-heading-3',
        ],
        opacity: 0,
    },
    {
        targets: '.components-empty-button',
        opacity: 1,
    },
    {
        targets: [
            '.blue-empty-button',
            '.green-empty-button',
            '.red-empty-button'
        ],
    },
    {
        targets: '.blue-empty-button',
        addClasses: ['primary'],
    },
    {
        targets: '.green-empty-button',
        addClasses: ['secondary'],
    },
    {
        targets: '.red-empty-button',
        addClasses: ['warning'],
    },
    {
        targets: [
            '.blue-empty-button',
            '.green-empty-button',
            '.red-empty-button'
        ],
        addClasses: ['small'],
        duration: 1000,
    },
    {
        targets: [
            '.blue-empty-button',
            '.green-empty-button',
            '.red-empty-button'
        ],
        opacity: 0,
    },
    {
        targets: '.components-empty-image',
        opacity: 1,
    },
    {
        targets: '.components-empty-image',
        opacity: 0,
    },
    {
        targets: '.components-tillo-card-image',
        opacity: 1,
    },
    {
        targets: '.components-tillo-card-image',
        opacity: 0,
    },
    {
        targets: '.components-tillo-placeholder-image',
        opacity: 1,
    },
    {
        targets: '.components-tillo-placeholder-image',
        opacity: 0,
    },
    {
        targets: '.components-overview',
        opacity: 1,
    },
    {
        targets: '.components-overview',
        opacity: 0,
    },
    {
        targets: '.final-card-slide',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-image-slot, .final-card-slide-title-slot, .final-card-slide-paragraph-slot, .final-card-slide-button-slot',
        keyframes: [
            {opacity: 1},
            {opacity: 0},
            {opacity: 1},
            {opacity: 0},
            {opacity: 1},
            {opacity: 0},

        ],
        duration: 4000,
    },
    {
        targets: '.final-card-slide-image',
        top: 0,
    },
    {
        targets: '.final-card-slide-image',
        opacity: 1,
        top: 0,
        duration: 500
    },
    {
        targets: '.final-card-slide-title',
        opacity: 1,
        width: '100%',
    },
    {
        targets: '.final-card-slide-paragraph',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-button-slot-content',
        opacity: 1,
        width: '100%',
    },
    {
        targets: '.final-card-slide-buy-button',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-details-button',
        opacity: 1,
    },
    {
        targets: '.final-card-slide',
        opacity: 0,
        duration: 600,
    },
    {
        targets: '.journeys-end, .journeys-end-heading, .journeys-end-stars',
        opacity: 1,
        hide: true,
        initHide: true,
    }

] satisfies anime.AnimeAnimParams[]
</script>

<template>
        <ConferenceIcon class="absolute top-0 right-0 z-50 w-[50px] height-[50px]" />

    <SlideArena :slides :duration="120" @current-slide="console.log($event)">

        <div class="w-screen h-screen absolute overflow-hidden flex bg-black text-white">

            <!-- Stars -->
            <Stars class="stars" />

            <!-- Introduction - Cosmic Voyage -->
            <div id="my-custom-id" class="cosmic-voyage-introduction absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%) scale(10);">
                <Heading size="slide-intro">
                    A Cosmic Voyage
                </Heading>
                <Heading size="h1">
                    Through Front-end Development
                </Heading>
            </div>


            <!-- Component Introduction -->
            <div
                class="intro-component gap-4 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
                <Card style="scale: 1.2">
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
                        <div class="flex w-full gap-2 px-4">
                            <Button size="small" class="w-full" theme="primary">Buy</Button>
                            <Button size="small" class="w-full" theme="secondary">Details</Button>
                        </div>
                    </template>
                </Card>
            </div>

            <!-- The Atom/Tokens -->
            <div
                class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Heading class="intro-atomic-design-heading w-[0px] overflow-clip whitespace-nowrap" size="slide-intro" style="scale: 3">
                    Tokens
                </Heading>

            </div>

            <div class="token-example absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              
                    <Heading class="intro-atomic-design-heading-2 w-[0px] overflow-clip whitespace-nowrap" size="h3" style="scale: 5" >
                    $spacing_normal: 8px;
                </Heading>
            </div>

            <div
                class="intro-atomic-design-2 absolute transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2" style="transform: translate(-50%, -50%); ">
                <div class="atom-headings flex gap-2" style="scale: 2;">
                    <Heading class="heading-1 opacity-0 pl-4 w-fit" size="h1">Values</Heading>
                    <Heading class="heading-2 opacity-0 pl-4 w-fit" size="h1">Reusable</Heading>
                    <Heading class="heading-3 opacity-0 pl-4 w-fit" size="h1">Common Language
                    </Heading>
                </div>
            </div>


            <div
                class="colour-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                <div class="bold-atoms flex gap-4 opacity-0">
                    <Atom style="scale: 2" name="blue-atom" :colour="bold_blue" />
                    <Atom style="scale: 2" name="green-atom" :colour="bold_green" />
                    <Atom style="scale: 2" name="red-atom" :colour="bold_red" />
                </div>
                <h1
                    class="colour-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[350px] text-slate-500 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Colour</h1>
            </div>

            <divz
                class="type-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center w-full">
                <div class="heading-atoms flex flex-col gap-12">
                    <Heading style="scale: 2" class="pb-4" size="atom-1">The quick brown fox jumps over the lazy dog</Heading>
                    <Heading style="scale: 2" class="pb-4" size="atom-2">The quick brown fox jumps over the lazy dog</Heading>
                    <Heading style="scale: 2" class="pb-4" size="atom-3">The quick brown fox jumps over the lazy dog</Heading>
                </div>
                <h1
                    class="type-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[450px] text-slate-500 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Fonts</h1>

            </divz>

            <div
                class="spacing-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                <div class="type-atoms-foxes flex flex-col justify-center items-center gap-4" style="scale: 2">
                    <div class="spacing-atoms-atom flex justify-center items-center w-[160px] h-[160px] rounded-lg
                        bg-stripes-white
                        ">
                        <div class="w-40 h-40 bg-slate-500 rounded-lg"></div>
                    </div>
                </div>
                <h1
                    class="spacing-bg-heading absolute font-extrabold uppercase text-opacity-10 text-[350px] text-slate-500 opacity-0 outline-2 drop-shadow-[3.1px_1px_rgba(0,0,0,0.3)]">
                    Spacing</h1>
            </div>

            <div class="components-introduction absolute top-1/2 left-1/2"
                style="transform: translate(-50%, -50%);">

                <Heading class="components-introduction-heading pb-4 w-[0px] overflow-clip" size="slide-intro" style="scale: 2;">
                    Components
                </Heading>
            </div>

            <div class="component-headings absolute top-1/2 left-1/2 opacity-0 w-fit whitespace-nowrap flex gap-10 "
                 style="transform: translate(-50%, -50%);"
            >
                <div style="display: flex; scale: 4">
                    <Heading class="component-heading-1 opacity-0" size="h1">Singular</Heading>
                    <Heading class="component-heading-2 opacity-0 pl-4" size="h1">Simplicity</Heading>
                </div>
            </div>


            <div class="components-empty-button absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <div class="flex gap-4 w-full" style="scale: 3">
                    <Button class="blue-empty-button">Blue</Button>
                    <Button class="green-empty-button">Green</Button>
                    <Button class="red-empty-button">Red</Button>
                </div>
            </div>

            <div class="components-empty-image absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <Image width="600" height="400" src="https://placehold.co/600x400"></Image>
            </div>
            <div class="components-tillo-card-image absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <Image width="600" height="400" src="https://www.giftpro.co.uk/wp-content/uploads/2021/06/Tillo-Header.jpg"></Image>
            </div>
            <div class="components-tillo-placeholder-image absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <Image width="600" height="400"></Image>
            </div>



            <div class="components-overview absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <div class="component-headings flex">
                    <Heading class="pl-4" size="h1">Duplication</Heading>
                    <Heading class="pl-4" size="h1">Composition</Heading>
                    <Heading class="pl-4" size="h1">
                        Design
                    </Heading>
                    <Heading class="pl-4" size="h1">
                       Change
                    </Heading>
                </div>
            </div>

            <div class="final-card-slide absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <Card class="h-[461px] w-[384px] relative" style="scale: 1.2">
                    <template #image>
                        <div class="final-card-slide-image-slot opacity-0 absolute top-0 w-full h-[234px]" :class="[tillo_lapis]">
                        </div>
                        <Image class="final-card-slide-image opacity-0 top-[-100px] absolute" src="https://www.giftpro.co.uk/wp-content/uploads/2021/06/Tillo-Header.jpg" />
                    </template>
                    <template #title>
                        <div class="final-card-slide-title-slot h-[32px] left-0 w-full opacity-0 absolute top-[285px]" :class="[tillo_lapis]">
                        </div>
                        <CardParagraph theme="dark" class="final-card-slide-title absolute top-[285px] opacity-0">A Tillo gift card
                        </CardParagraph>
                    </template>
                    <template #subtitle>
                        <div class="final-card-slide-paragraph-slot opacity-0 absolute top-[325px] h-[24px] w-full left-0" :class="[tillo_lapis]">
                        </div>
                        <p class="final-card-slide-paragraph opacity-0 absolute top-[325px]">Surprise and delight your family or friends</p>
                    </template>
                    <template #buttons>
                        <div class="final-card-slide-button-slot opacity-0 flex w-full gap-2 absolute bottom-6 h-[45px] left-0" :class="[tillo_lapis]">
                        </div>
                        <div class="final-card-slide-button-slot-content flex gap-2 absolute bottom-0 w-[0px] h-[48px] opacity-0 left-0 mb-6 px-4"
                        >
                            <Button size="small" class="final-card-slide-buy-button w-full opacity-1" theme="primary">Buy</Button>
                            <Button size="small" class="final-card-slide-details-button w-full opacity-1" theme="secondary">Details</Button>
                        </div>
                    </template>
                </Card>
            </div>

            <Stars class="journeys-end-stars opacity-0" />

            <div class="journeys-end absolute top-1/2 left-1/2 opacity-0" style="transform: translate(-50%, -50%) scale(2);">

                <Heading class="journeys-end-heading opacity-0" size="slide-intro">
                   Journeys End
                </Heading>
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
