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
    <p class="text-2xl font-bold text-gray-800" :class="classes">
        <slot />
    </p>
</template>

<style scoped>

</style>