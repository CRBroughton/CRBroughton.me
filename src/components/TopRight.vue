<script setup lang="ts">

</script>

<template>
    <div
        class="customContainer overflow-scroll border border-t-0 border-r-0 border-l-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
        <h1 class="scroll-m-20 font-extrabold tracking-tight text-3xl ">Projects</h1>
        <h2 class="scroll-m-20 font-normal tracking-tight text-xl ">I'm currently working on several applications,
            including:
        </h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text "><a class="underline underline-offset-4"
                href="https://forager.crbroughton.me">Forager</a> - Web based application for mapping publicly accessible
            foods. Forager encourages data governance & ownership of your data, and ships as a single binary, making
            deployments a breeze.</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text "><a class="underline underline-offset-4"
                href="https://www.aiemotes.uk">AIEmotes</a> - Innovative AI-powered emote generation. Create stunning emotes
            for various website with just a single click. AIEmotes was created with the V3 stack.</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">Regress (coming soon) - Regress is a web based application,
            which provides a visualisation layer to your image assets repository, as well as an easy to use interface for
            simple regression testing.</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text "><a class="underline underline-offset-4"
                href="https://github.com/crBroughton/v3">V3</a> - V3 is a personalised Nuxt stack for rapid development
            practices. The aim of V3 is to enable developers to move fast without breaking anything, which is the manta of
            TRPC, which powers the core of V3's API. V3 was inspired by T3, a similar stack which instead uses React as the
            front-end framework.</h2>
    </div>
</template>

<style scoped>.customContainer {
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