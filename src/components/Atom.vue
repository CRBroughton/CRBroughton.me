<script setup lang="ts">
const props = defineProps<{name?: string, colour: string, absolute?: boolean}>()
</script>

<template>
    <div class="w-32 h-32 rounded-full" :class="[props.name, props.colour]">
    </div>
</template>