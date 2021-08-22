<template>
  <div class="w-full bg-white py-8 text-sm md:py-12 md:px-8 border-b-2 border-gray-100">
    <ul class="justify-center gap-12 md:gap-0 text-gray-800 hidden md:flex md:visible">
      <li class="mr-auto pl-12 ml-12md:inline">
        <a href>CRBROUGHTON.ME</a>
      </li>
      <li class="md:pr-12">
          <a href="#aboutme">ABOUT ME</a>
      </li>
      <li class="md:pr-12">
          <a href="#projects">PROJECTS</a>
      </li>
      <li class="md:pr-12">
          <a href="#skills">SKILLS</a>
      </li>
      <li class="md:pr-12">
          <a href="#contact">CONTACT</a>
      </li>
    </ul>
    <div class="flex justify-end mr-6 md:hidden">
      <div v-on:click="toggleSidebar" class="w-6">
        <svg v-if="!sidebar" class="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      </div>
    </div>
  </div>
  <div v-if="sidebar" class="flex absolute justify-end w-full bg-gray-50 md:hidden">
    <div class="mr-14 my-4">
      <ul>
        <li class="mb-1" @click="toggleSidebar">
            <a href="#aboutme">ABOUT ME</a>
        </li>
        <li class="mb-1" @click="toggleSidebar">
            <a href="#projects">PROJECTS</a>
        </li>
        <li class="mb-1" @click="toggleSidebar">
            <a href="#skills">SKILLS</a>
        </li>
        <li class="mb-1" @click="toggleSidebar">
            <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default({
  data() {
    return {
      sidebar: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  }
  });
</script>

<style scoped>
</style>