<template>
  <NuxtLink
    :to="`/blog/tag/${tag}`"
    class="inline-block rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
  >
    {{ tag }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ tag: string }>()
</script>
