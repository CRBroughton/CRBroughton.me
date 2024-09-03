<script setup lang="ts">

</script>

<template>
    <div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="w-full object-cover">
            <slot name="image" />
        </div>
        <div class="px-6 mt-6">
            <slot name="title" />
        </div>
        <div class="px-6 mt-2 mb-12 text-gray-600">
            <slot name="subtitle"/>
        </div>
        <div class="mt-auto mx-6 mb-6 flex space-x-2 rounded-b-xl">
            <slot name="buttons" />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>