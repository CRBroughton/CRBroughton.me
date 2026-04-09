<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-lg text-zinc-200 font-sans">
    <header class="page-container flex items-center justify-between py-8">
      <NuxtLink
        to="/"
        class="text-zinc-100 font-medium tracking-tight transition-colors hover:text-white"
      >
        Craig Broughton
      </NuxtLink>
      <nav class="flex gap-6">
        <NuxtLink to="/blog" class="nav-link">
          Blog
        </NuxtLink>
        <a
          href="https://github.com/CRBroughton"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-link"
        >GitHub</a>
      </nav>
    </header>
    <main class="page-container min-h-[calc(100vh-140px)] py-12">
      <slot />
    </main>
    <footer class="page-container border-t border-zinc-800 py-8">
      <p class="text-sm text-zinc-600">
        © {{ year }} Craig Broughton
      </p>
    </footer>
  </div>
</template>
