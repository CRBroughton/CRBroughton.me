<template>
  <div class="w-full flex text-left text-lg font-medium font-inter px-4 pb-12 text-gray-800 md:justify-center">
    <div class="flex flex-col max-w-2xl">
      <h1 class="text-2xl md:text-3xl font-medium text-secondary mb-4 font-inter">Projects</h1>
      <h2 class="text-lg font-semibold mb-4">Forager</h2>
      <p class="text-base mb-4">My latest project is Forager, a Progressive Web Application written with Vue for mapping publicly accessible foods.</p>
      <a href="https://forager.crbroughton.me" class="flex w-44 mt-4 py-2 pl-2 mb-8 rounded bg-gray-300 justify-center items-center transition duration-250 ease-in-out  hover:bg-gray-200">Forager<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
      <h2 class="text-lg font-semibold mb-4">GraphQL - SpaceX Demo</h2>
      <p class="text-base mb-4">This project shows a simple demonstration of GraphQL and Vue (built with Gridsome and Tailwind).</p>
      <p class="text-base mb-4">The project relies on GraphQL to fetch image URLS, article URLS and the year of the mission.</p>
      <a href="https://graphql.crbroughton.me" class="flex w-44 mt-4 py-2 pl-2 mb-8 rounded bg-gray-300 justify-center items-center transition duration-250 ease-in-out  hover:bg-gray-200">GraphQL Demo<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
      <p class="text-base mb-4">All of my projects can be found simply by pressing the button below, which will take you to my Github page.</p>
      <a href="https://github.com/CRBroughton" class="flex w-44 mt-4 py-2 pl-2 rounded bg-gray-300 justify-center items-center transition duration-250 ease-in-out  hover:bg-gray-200">Github Projects

          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>