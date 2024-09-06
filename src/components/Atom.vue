<script setup lang="ts">
const props = defineProps<{name?: string, colour: string, absolute?: boolean}>()
</script>

<template>
    <div class="animate-spin-slow" :class="{'absolute': props.absolute}">
        <div class="flex justify-center items-center w-32 h-32 border-2 border-white rounded-full">
            <div class="absolute w-4 h-4 bg-white rounded-full top-[-6px]"></div>
            <div class="w-24 h-24 rounded-full" :class="[props.name, props.colour]">
            </div>
        </div>
    </div>
</template>