<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    removeStyles?: boolean
}>()

const titleStyles = computed(() => {
    return props.removeStyles === true ? '' : 'px-6 mt-6'
})

const subtitleStyles = computed(() => {
   return props.removeStyles === true ? '' : 'px-6 mt-2 mb-12'
})

const buttonStyles = computed(() => {
    return props.removeStyles === true ? '' : 'mb-6'
})

</script>

<template>
    <div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="w-full object-cover">
            <slot name="image" />
        </div>
        <div :class="titleStyles">
            <slot name="title" />
        </div>
        <div class="text-gray-600" :class="subtitleStyles">
            <slot name="subtitle"/>
        </div>
        <div class="mt-auto flex rounded-b-xl" :class="buttonStyles">
            <slot name="buttons" />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>