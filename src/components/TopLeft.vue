<script setup lang="ts">
import Heading from "./Heading.vue";
import Paragraph from './Paragraph.vue';
</script>

<template>
    <div class="flex items-center">
        <Heading size="h1">Hi there, I'm Craig, </Heading>
        <a class="hidden sm:block" href="https://crbroughton.me"><img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" height="25px"
                alt="waving hand"></a>
    </div>
    <Heading size="h2">I'm a Software Engineer,
        focused on delivering
        <span class="underline underline-offset-4 font-bold">performant</span>,
        <span class="underline underline-offset-4 font-bold">high-quality</span> applications.
    </Heading>
    <Paragraph>My passion drives my success; I always aim to achieve.</Paragraph>
    <Paragraph>I currently work at <a href="https://tillo.io"><span
                class="underline underline-offset-4 transition duration-500 ease-in-out text-[rgb(139,135,239)] hover:text-[rgba(57,216,132)] hover:cursor-pointer font-semibold">Tillo</span></a>,
        where I lead the front end development of our platforms. I run regular company workshops, focused on enhancing
        knowledge of front end development.</Paragraph>
    <Paragraph>My goal is to drive forward our platform to surprise and
        delight all of our users, giving them the experience they deserve.</Paragraph>

    <div class="mt-auto flex flex-col gap-2 lg:flex-row">
        <Paragraph><span
                class="underline underline-offset-4 font-bold">Skills:</span> TypeScript, Vue, Tailwind, Go</Paragraph>
        <Paragraph class="lg:ml-auto"><a href="/talks" class="underline underline-offset-4">Talks & Slides</a>
        </Paragraph>
        <Paragraph><a href="https://rxresu.me/crbroughton/cv" class="underline underline-offset-4">CV / Resume available
                here</a>
        </Paragraph>
    </div>
</template>