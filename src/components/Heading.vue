<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    size: 'h1' | 'h2' | 'h3' | 'slide-intro' | 'slide-subheading' | 'atom-1'| 'atom-2' | 'atom-3'
}>()

const classes = computed(() => {
    return {
        "scroll-m-20 font-extrabold tracking-tight text-3xl": props.size === 'h1',
        'scroll-m-20 font-normal tracking-tight text-xl': props.size === 'h2',
        'scroll-m-20 font-normal tracking-tight text': props.size === 'h2',
        'scroll-m-20 font-extrabold tracking-tight text-7xl': props.size === 'slide-intro',
        'scroll-m-20 font-normal tracking-tight text-2xl': props.size === 'slide-subheading',
    }
})

const extraClasses = computed(() => {
    return {
        "scroll-m-20 font-extrabold tracking-normal text-2xl": props.size === 'atom-1',
        "scroll-m-20 font-medium tracking-tight text-xl": props.size === 'atom-2',
        "scroll-m-20 font-light tracking-tighter text-gray-500": props.size === 'atom-3',
    }
    
})
</script>

<template>
    <h1 :class="[classes, extraClasses]" class="track">
        <slot />
    </h1>
</template>