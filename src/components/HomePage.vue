<script setup lang="ts">
import TopLeft from './TopLeft.vue'
import TopRight from './TopRight.vue'
import BottomLeft from './BottomLeft.vue'
import BottomRight from './BottomRight.vue'
import GridContainer from './GridContainer.vue'

</script>

<template>
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
</template>