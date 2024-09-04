<script setup lang="ts">
defineProps<{
    src?: string
}
>()
</script>

<template>
    <img v-if="src" :src class="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
    <div v-else class="w-[600px] h-[400px] animate-pulse bg-gray-400 rounded-xl"></div>
</template>

<style scoped>

</style>