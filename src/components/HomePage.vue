<script setup lang="ts">
import TopLeft from './TopLeft.vue'
import TopRight from './TopRight.vue'
import BottomLeft from './BottomLeft.vue'
import BottomRight from './BottomRight.vue'

</script>

<template>
    <div class="grid justify-center items-center bg-slate-800 w-screen h-screen">
        <div class="w-screen">
            <div class="grid grid-cols-1 grid-rows-1 lg:w-full xl:h-screen xl:grid-cols-2 lg:grid-rows-2 bg-gray-900">
                <TopLeft />
                <TopRight />
                <BottomLeft />
                <BottomRight />
            </div>
        </div>
    </div>
</template>

<style scoped></style>