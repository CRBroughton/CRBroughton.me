<script setup lang="ts">
import TopLeft from './TopLeft.vue'
import TopRight from './TopRight.vue'
import BottomLeft from './BottomLeft.vue'
import BottomRight from './BottomRight.vue'
import GridContainer from './GridContainer.vue'

</script>

<template>
    <div class="grid justify-center items-center bg-gray-900 min-h-screen w-screen xl:max-w-[1920px] xl:max-h-[1080px]">
        <GridContainer>
            <template #top-left>
                <TopLeft />
            </template>
            <template #top-right>
                <TopRight />
            </template>
            <template #bottom-left>
                <BottomLeft />
            </template>
            <template #bottom-right>
                <BottomRight />
            </template>
        </GridContainer>
    </div>
</template>