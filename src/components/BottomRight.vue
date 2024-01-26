<script setup lang="ts">

</script>

<template>
    <div
        class="customContainer overflow-scroll border border-t-0 border-b-0 border-r-0 border-l-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
        <h1 class="scroll-m-20 font-extrabold tracking-tight text-3xl ">Wanna chat?</h1>
        <h2 class="scroll-m-20 font-normal tracking-tight text-xl ">You can find me using any of the following:
        </h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Email: <a class="underline underline-offset-4"
                href="mailto:crbroughton@posteo.uk">CRBroughton@posteo.uk</a></h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Linkedin: <a class="underline underline-offset-4"
                href="https://www.linkedin.com/in/craig-broughton-5a2809189">https://www.linkedin.com/in/craig-broughton-5a2809189</a>
        </h2>
        <p class="mt-auto ml-auto scroll-m-20 font-normal tracking-tight text-base ">Made with Astro, Vue & Tailwind</p>
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