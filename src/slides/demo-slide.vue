<script setup lang="ts">
import { onMounted, ref } from "vue";
import Heading from "../components/Heading.vue";
import { useGenerator } from '../generator'

let heading: HTMLElement | null
const showAnimatedSlide = ref(false)

onMounted(() => {
    heading = document.getElementById('introduction-heading');
    const { generator } = useGenerator({
        states: [{
            targets: heading,
            scale: 0.4,
            paddingBottom: '500px',
            duration: 1000,
            easing: 'linear'
        }]
    })

    document.addEventListener("keypress", (event) => {
        if (event.key === "d") {
            console.log('hello')
            generator().next()
        }
    });
})
</script>

<template>
    <div class="text-white flex gap-4 w-full">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="flex flex-col gap-8">
                <Heading id="introduction-heading" size="h1" style="scale: 2.4">Atomic Components</Heading>
                <button id="test" class="bg-slate-200 text-black py-1 px-8 rounded-lg"
                    @click="introduction">Click</button>
            </div>
        </div>
        <div v-if="showAnimatedSlide" class="w-full h-screen flex items-center justify-start pl-24">
            asdasd
        </div>
    </div>
</template>
