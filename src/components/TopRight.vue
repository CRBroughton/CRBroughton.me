<script setup lang="ts">
import Heading from "./Heading.vue";
import Paragraph from "./Paragraph.vue";
</script>

<template>
    <Heading size="h1">Projects</Heading>
    <Heading size="h2">I'm currently working on several applications,
        including:
    </Heading>
    <Paragraph><a class="underline underline-offset-4"
            href="https://forager.crbroughton.me">Forager</a> - Web based application for mapping publicly accessible
        foods. Forager encourages data governance & ownership of your data, and ships as a single binary, making
        deployments a breeze.</Paragraph>
    <Paragraph><a class="underline underline-offset-4"
            href="https://www.aiemotes.uk">AIEmotes</a> - Innovative AI-powered emote generation. Create stunning emotes
        for various website with just a single click. AIEmotes was created with the V3 stack.</Paragraph>
    <Paragraph><a class="underline underline-offset-4"
            href="https://github.com/CRBroughton/Sibyl">Sibyl</a> - A lightweight, type-safe query builder for sql.js,
        libSQL & Bun.</Paragraph>
    <Paragraph>Regress (coming soon) - Regress is a web based application,
        which provides a visualisation layer to your image assets repository, as well as an easy to use interface for
        simple regression testing.</Paragraph>
    <Paragraph><a class="underline underline-offset-4"
            href="https://github.com/crBroughton/v3">V3</a> - V3 is a personalised Nuxt stack for rapid development
        practices. The aim of V3 is to enable developers to move fast without breaking anything, which is the manta of
        TRPC, which powers the core of V3's API. V3 was inspired by T3, a similar stack which instead uses React as the
        front-end framework.</Paragraph>
    <Paragraph><a class="underline underline-offset-4"
            href="https://github.com/CRBroughton/ts-test-utils">TS Test Utils</a> - A collection of helper TypeScript
        types to test other TypeScript types.</Paragraph>
</template>