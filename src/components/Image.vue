<script setup lang="ts">
defineProps<{
    src: string
}
>()
</script>

<template>
    <img :src class="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
</template>

<style scoped>

</style>