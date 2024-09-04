<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    size: 'h1' | 'h2' | 'h3' | 'slide-intro' | 'slide-subheading'
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
</script>

<template>
    <h1 :class="classes">
        <slot />
    </h1>
</template>