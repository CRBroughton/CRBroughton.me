<script setup lang="ts">
import TopLeft from './TopLeft.vue'
import TopRight from './TopRight.vue'
import BottomLeft from './BottomLeft.vue'
import BottomRight from './BottomRight.vue'

</script>

<template>
    <div class="grid justify-center items-center bg-gray-900 h-screen w-screen xl:max-w-[1920px] xl:max-h-[1080px]">
        <div >
            <div class="grid grid-cols-1 grid-rows-1  xl:grid-cols-2 lg:grid-rows-2">
                <TopLeft />
                <TopRight />
                <BottomLeft />
                <BottomRight />
            </div>
        </div>
    </div>
</template>

<style scoped></style>