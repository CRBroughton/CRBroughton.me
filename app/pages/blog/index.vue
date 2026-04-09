<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-all', () =>
  (import.meta.dev ? queryCollection('blog') : queryCollection('blog').where('published', '=', true)).order('date', 'DESC').all())

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div>
    <h1 class="mb-6 text-2xl text-zinc-100 font-medium">
      Writing
    </h1>
    <ul v-if="posts?.length" class="space-y-8">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="group block">
          <div class="flex items-baseline justify-between gap-4">
            <span class="text-zinc-200 transition-colors group-hover:text-white">{{ post.title }}</span>
            <span class="shrink-0 text-sm text-zinc-600">{{ formatDate(post.date) }}</span>
          </div>
          <p v-if="post.description" class="mt-1 text-sm text-zinc-500">
            {{ post.description }}
          </p>
        </NuxtLink>
        <div v-if="post.tags?.length" class="mt-2 flex flex-wrap gap-1.5">
          <TagPill v-for="tag in post.tags" :key="tag" :tag="tag" />
        </div>
      </li>
    </ul>
    <p v-else class="text-zinc-500">
      No posts yet.
    </p>
  </div>
</template>
