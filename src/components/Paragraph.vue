<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
    theme: 'dark' | 'light'
}>()

const classes = computed(() => {
    return {
        'text-black': props.theme === 'dark',
        'text-white': props.theme === 'light'
    }
})
</script>

<template>
    <p class="scroll-m-20 font-normal tracking-tight" :class="classes">
        <slot />
    </p>
</template>

<style scoped>

</style>