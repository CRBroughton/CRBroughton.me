<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first())

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <article v-if="post">
    <header class="mb-12">
      <NuxtLink to="/blog" class="mb-8 inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-400">
        ← Back
      </NuxtLink>
      <h1 class="mt-4 text-2xl text-zinc-100 font-medium">
        {{ post.title }}
      </h1>
      <div class="mt-2 flex flex-wrap items-center gap-3">
        <p class="text-sm text-zinc-500">
          {{ formatDate(post.date) }}
        </p>
        <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5">
          <TagPill v-for="tag in post.tags" :key="tag" :tag="tag" />
        </div>
      </div>
    </header>
    <div class="max-w-none text-justify prose prose-zinc prose-invert">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
