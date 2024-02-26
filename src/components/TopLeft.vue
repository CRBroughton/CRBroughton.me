<script setup lang="ts">

</script>

<template>
    <div
        class="customContainer overflow-scroll relative flex flex-col gap-4 border border-t-0 border-r-0 border-l-0 xl:border xl:border-t-0 xl:border-l-0 xl:border-r-1 xl:border-b-10 p-10 w-full h-full bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
        <div class="flex items-center">
            <h1 class="scroll-m-20 font-extrabold tracking-tight text-3xl ">Hi there, I'm Craig, </h1>
            <a class="hidden sm:block" href="https://crbroughton.me"><img
                    src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" height="25px"
                    alt="waving hand"></a>
        </div>
        <h2 class="scroll-m-20 font-normal tracking-tight text-xl ">I'm a Software Engineer,
            focused on delivering
            <span class="underline underline-offset-4 font-bold">performant</span>,
            <span class="underline underline-offset-4 font-bold">high-quality</span> applications.
        </h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">My passion drives my success; I always aim to achieve.</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">I currently work at <a href="https://tillo.io"><span
                    class="underline underline-offset-4 transition duration-500 ease-in-out text-[rgb(139,135,239)] hover:text-[rgba(57,216,132)] hover:cursor-pointer font-semibold">Tillo</span></a>,
            where I lead the front end development of our platforms. I run regular company workshops, focused on enhancing
            knowledge of front end development.</h2>
        <h2 class="scroll-m-20 font-normal tracking-tight text ">My goal is to drive forward our platform to surprise and
            delight all of our users, giving them the experience they deserve.</h2>

        <div class="mt-auto flex flex-col gap-2 lg:flex-row">
            <p class="scroll-m-20 font-normal tracking-tight text-base "><span
                    class="underline underline-offset-4 font-bold">Skills:</span> TypeScript, Vue, Tailwind, Go</p>
            <p class="scroll-m-20 font-normal tracking-tight text-base  lg:ml-auto"><a
                    href="https://rxresu.me/crbroughton/cv" class="underline underline-offset-4">CV / Resume available
                    here</a></p>
        </div>
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