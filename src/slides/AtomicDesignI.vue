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
const { present_atom, primary, secondary, warning, slate_bg, slate_text, tillo_emerald, tillo_lapis, tillo_red, pastel_blue, pastel_red, pastel_green, bold_blue, bold_green, bold_red } = useColours()

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
        targets: '.bold-atoms',
        opacity: 1,
    },
    {
        targets: '.blue-atom',
        backgroundColor: "hsl(192, 73%, 70%)",
    },
    {
        targets: '.green-atom',
        backgroundColor: "hsl(142, 69%, 78%)",
    },
    {
        targets: '.red-atom',
        backgroundColor: "hsl(0, 64%, 90%)",
    },
    {
        targets: '.blue-atom',
        backgroundColor: "hsl(242, 74%, 61%)",
    },
    {
        targets: '.green-atom',
        backgroundColor: "hsl(148, 67%, 54%)",
    },
    {
        targets: '.red-atom',
        backgroundColor: "hsl(0, 61%, 52%)",
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
        initHide: true,
        hide: true,
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
        initHide: true,
        hide: true,
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
    {
        targets: '.intro-atomic-design-2',
        opacity: 0,
    },
    {
        targets: '.components-introduction',
        opacity: 1,
        initHide: true,
        hide: true,
    },
    {
        targets: '.components-introduction',
        left: 640,
        top: 180,
        duration: 1000,
    },
    {
        targets: '.component-heading-1',
        opacity: 1,
    },
    {
        targets: '.component-heading-2',
        opacity: 1,
    },
    {
        targets: '.component-heading-3',
        opacity: 1,
    },
    {
        targets: [
            '.components-introduction',
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
            '.red-empty-buttofoon'
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
        targets: '.final-card-slide-image',
        opacity: 1
    },
    {
        targets: '.final-card-slide-title',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-paragraph',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-buy-button',
        opacity: 1,
    },
    {
        targets: '.final-card-slide-details-button',
        opacity: 1,
    }

] satisfies anime.AnimeAnimParams[]
</script>

<template>
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
                        <Button size="small" class="w-full" theme="primary">Buy</Button>
                        <Button size="small" class="w-full" theme="secondary">Details</Button>
                    </template>
                </Card>
            </div>

            <!-- The Atom/Tokens -->
            <div
                class="intro-atomic-design absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">

                <Atom absolute class="left-[-150px] top-[-20px]" :colour="present_atom" />
                <Heading class="pb-4" size="slide-intro">
                    Tokens
                </Heading>
            </div>

            <div
                class="intro-atomic-design-2 absolute transform -translate-x-1/2 -translate-y-1/2 opacity-0 left-[800px] top-[200px]">

                <Atom absolute class="left-[-150px]" :colour="present_atom" />
                <Heading class="pb-4" size="slide-intro">
                    Tokens
                </Heading>
                <div class="atom-headings">

                    <Heading class="heading-1 opacity-0 pl-4" size="slide-subheading">Tokens store values</Heading>
                    <Heading class="heading-2 opacity-0 pl-4" size="slide-subheading">Can re-use tokens across the
                        application</Heading>
                    <Heading class="heading-3 opacity-0 pl-4" size="slide-subheading">Tokens can be colour, typography, and
                        spacing
                        related
                    </Heading>
                    <Heading class="heading-4 opacity-0 pl-4" size="slide-subheading">Tokens help create a common language
                        between
                        Design, Engineering and Marketing
                    </Heading>
                </div>
            </div>


            <div
                class="colour-atoms absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex flex-col gap-8 justify-center items-center">
                <div class="bold-atoms flex gap-4 opacity-0">
                    <Atom name="blue-atom" :colour="bold_blue" />
                    <Atom name="green-atom" :colour="bold_green" />
                    <Atom name="red-atom" :colour="bold_red" />
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

            <div class="components-introduction absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">

                <Heading class="pb-4" size="slide-intro">
                    Components
                </Heading>
                <div class="component-headings">
                    <Heading class="component-heading-1 opacity-0 pl-4" size="slide-subheading">A single unit of code</Heading>
                    <Heading class="component-heading-2 opacity-0 pl-4" size="slide-subheading">Ideally has a single responsibility</Heading>
                    <Heading class="component-heading-3 opacity-0 pl-4" size="slide-subheading">Can be simple (Button) or complex (DatePicker)
                    </Heading>
                </div>
            </div>


            <div class="components-empty-button absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <div class="flex gap-4 w-full">
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

                <Heading class="pb-4" size="slide-intro">
                    Components
                </Heading>
                <div class="component-headings">
                    <Heading class="pl-4" size="slide-subheading">We build components to avoid code duplication</Heading>
                    <Heading class="pl-4" size="slide-subheading">Components can be 'composed' together, just like Lego to help create more complex components</Heading>
                    <Heading class="pl-4" size="slide-subheading">
                        Small components are easier to reuse in various
                        scenarios and are easier to design and write
                    </Heading>
                    <Heading class="pl-4" size="slide-subheading">
                        Our components are easy to change in the future
                    </Heading>
                    <Heading class="pl-4" size="slide-subheading">
                       Small components are easier to test
                    </Heading>
                    <Heading class="pl-4" size="slide-subheading">
                       Composing components together avoids 'God components';
                       components that are responsible for too many things
                    </Heading>
                </div>
            </div>




            <div class="final-card-slide absolute top-1/2 left-1/2 opacity-0"
                style="transform: translate(-50%, -50%);">
                <Card>
                    <template #image>
                        <Image src="https://www.giftpro.co.uk/wp-content/uploads/2021/06/Tillo-Header.jpg" class="final-card-slide-image opacity-0" />
                    </template>
                    <template #title>
                        <CardParagraph theme="dark" class="final-card-slide-title opacity-0">A Tillo gift card
                        </CardParagraph>
                    </template>
                    <template #subtitle>
                        <p class="final-card-slide-paragraph opacity-0">Surprise and delight your family or friends</p>
                    </template>
                    <template #buttons>
                        <Button size="small" class="final-card-slide-buy-button w-full  opacity-0" theme="primary">Buy</Button>
                        <Button size="small" class="final-card-slide-details-button w-full  opacity-0" theme="secondary">Details</Button>
                    </template>
                </Card>
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
