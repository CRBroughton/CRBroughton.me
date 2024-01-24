<script setup lang="ts">
import TopLeft from './TopLeft.vue'
import TopRight from './TopRight.vue'
import BottomLeft from './BottomLeft.vue'
import BottomRight from './BottomRight.vue'

</script>

<template>
    <div class="grid justify-center items-center bg-slate-800 w-screen h-screen">
        <div class="w-screen">
            <div class="grid grid-cols-2 grid-rows-2 w-full h-screen bg-gray-900">
                <TopLeft />
                <TopRight />
                <BottomLeft />
                <BottomRight />
            </div>
        </div>
    </div>
</template>

<style scoped></style>