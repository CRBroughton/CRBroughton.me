<script setup lang="ts">
const route = useRoute()
const tag = route.params.tag as string

const { data: allPosts } = await useAsyncData(`blog-tag-${tag}`, () =>
  (import.meta.dev ? queryCollection('blog') : queryCollection('blog').where('published', '=', true)).order('date', 'DESC').all())

const posts = computed(() => allPosts.value?.filter(p => p.tags?.includes(tag)) ?? [])

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div>
    <div class="mb-12 flex items-center gap-4">
      <NuxtLink to="/blog" class="text-sm text-zinc-600 transition-colors hover:text-zinc-400">
        ← All posts
      </NuxtLink>
      <TagPill :tag="tag" />
    </div>
    <ul v-if="posts.length" class="space-y-8">
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
          <TagPill v-for="t in post.tags" :key="t" :tag="t" />
        </div>
      </li>
    </ul>
    <p v-else class="text-zinc-500">
      No posts tagged "{{ tag }}".
    </p>
  </div>
</template>
