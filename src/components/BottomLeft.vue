<script setup lang="ts">

</script>

<template>
    <div
        class="customContainer overflow-scroll border border-t-0 border-l-0 border-r-0 xl:border xl:border-t-0 xl:border-l-0 xl:border-b-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
        <h1 class="scroll-m-20 font-extrabold tracking-tight text-3xl ">Interests</h1>
        <h2 class="scroll-m-20 font-normal tracking-tight text-xl ">When I'm not programming, you can usually find me:
        </h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Playing my guitar and singing</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Reading through a new book</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Practicing my drawing</h2>
    </div>
</template>


<style scoped>
.customContainer {
    overflow-y: scroll;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
}

.customContainer::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}</style>