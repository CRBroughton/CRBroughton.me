<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  (import.meta.dev ? queryCollection('blog') : queryCollection('blog').where('published', '=', true)).order('date', 'DESC').limit(5).all())

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' })
}

const projects = [
  {
    name: 'Recul',
    description: 'Stay N versions behind the latest published release of your npm dependencies to avoid supply chain attacks. Supports CLI, GitHub Actions, pnpm monorepos, and catalog configurations.',
    url: 'https://github.com/CRBroughton/recul',
  },
  {
    name: 'AIEmotes',
    description: 'Innovative AI-powered emote generation. Create stunning emotes for various websites with just a single click. AIEmotes was created with the V3 stack.',
  },
  {
    name: 'Sibyl',
    description: 'A lightweight, type-safe query builder for sql.js, libSQL & Bun.',
  },
  {
    name: 'Regress',
    description: 'A web based application which provides a visualisation layer to your image assets repository, as well as an easy to use interface for simple regression testing.',
    soon: true,
  },
  {
    name: 'V3',
    description: 'A personalised Nuxt stack for rapid development practices. The aim of V3 is to enable developers to move fast without breaking anything, which is the mantra of tRPC, which powers the core of V3\'s API. V3 was inspired by T3, a similar stack which instead uses React as the front-end framework.',
  },
  {
    name: 'TS Test Utils',
    description: 'A collection of helper TypeScript types to test other TypeScript types.',
  },
]
</script>

<template>
  <div class="space-y-16">
    <section class="text-zinc-400 leading-relaxed space-y-4">
      <p>Hi there, I'm Craig 👋</p>
      <p>I'm a Software Engineer, focused on delivering performant, high-quality applications.</p>
      <p>My passion drives my success; I always aim to achieve.</p>
      <p>
        I currently work at <a href="https://www.tillo.com" target="_blank" rel="noopener noreferrer" class="text-zinc-300 underline underline-offset-4 transition-colors hover:text-white">Tillo</a>,
        where I lead the front end development of our platforms. I run regular company workshops,
        focused on enhancing knowledge of front end development.
      </p>
      <p>My goal is to drive forward our platform to surprise and delight all of our users, giving them the experience they deserve.</p>
      <p><span class="text-zinc-300 font-medium">Skills:</span> TypeScript, Vue, Tailwind, Go</p>
      <p><a href="#" class="text-zinc-300 underline underline-offset-4 transition-colors hover:text-white">CV / Resume</a></p>
    </section>

    <section v-if="posts?.length">
      <h2 class="mb-6 text-xs text-zinc-500 font-medium tracking-widest uppercase">
        Writing
      </h2>
      <ul class="space-y-4">
        <li v-for="post in posts" :key="post.path" class="flex items-baseline gap-4">
          <NuxtLink :to="post.path" class="text-zinc-300 transition-colors hover:text-zinc-100">
            {{ post.title }}
          </NuxtLink>
          <span class="shrink-0 text-sm text-zinc-600">{{ formatDate(post.date) }}</span>
        </li>
      </ul>
      <NuxtLink to="/blog" class="mt-6 inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-400">
        All posts →
      </NuxtLink>
    </section>

    <section>
      <h2 class="mb-6 text-xs text-zinc-500 font-medium tracking-widest uppercase">
        Projects
      </h2>
      <p class="mb-6 text-zinc-500" />
      <ul class="space-y-6">
        <li v-for="project in projects" :key="project.name">
          <span class="text-zinc-200 font-medium">{{ project.name }}</span>
          <span v-if="project.soon" class="ml-2 text-sm text-zinc-500 italic">(coming soon)</span>
          <span class="text-zinc-500"> — {{ project.description }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
