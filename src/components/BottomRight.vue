<script setup lang="ts">
import Heading from "./Heading.vue";
import Paragraph from './Paragraph.vue';
</script>

<template>
    <Heading size="h1">Wanna chat?</Heading>
    <Heading size="h2">You can find me using any of the following:
    </Heading>
    <Paragraph>Email: <a class="underline underline-offset-4"
            href="mailto:crbroughton@posteo.uk">CRBroughton@posteo.uk</a></Paragraph>
    <Paragraph>Linkedin: <a class="underline underline-offset-4"
            href="https://www.linkedin.com/in/craig-broughton-5a2809189">https://www.linkedin.com/in/craig-broughton-5a2809189</a>
    </Paragraph>
    <Paragraph class="mt-auto ml-auto scroll-m-20 font-normal tracking-tight text-base ">Made with Astro, Vue & Tailwind</Paragraph>
</template>