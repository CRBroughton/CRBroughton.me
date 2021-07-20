<template>
  <div class="w-full flex text-left text-lg font-medium font-inter px-4 pb-12 text-gray-800 md:justify-center">
    <div class="flex flex-col max-w-2xl w-full">
      <h1 class="text-xl font-semibold mb-4">Skills</h1>
      <li v-for="skill in skills" :key="skill">
        <p class="min-w-1/33 mb-2 mr-2 py-1 px-4 rounded text-sm transition duration-250 ease-in-out bg-green-300 hover:bg-green-500" :class="skill.width">{{skill.name}}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", width: "w-full", },
        { name: "GIT", width: "w-full" },
        { name: "Linux", width: "w-full", },
        { name: "CSS", width: "w-10/12", },
        { name: "Tailwind", width: "w-10/12", },
        { name: "Bootstrap", width: "w-10/12", },
        { name: "Docker", width: "w-9/12" },
        { name: "Javascript", width: "w-9/12" },
        { name: "Typescript", width: "w-9/12" },
        { name: "Vue", width: "w-9/12" },
        { name: "PWA", width: "w-9/12" },
        { name: "Astro", width: "w-8/12" },
        { name: "Ansible", width: "w-7/12" },
        { name: "Python", width: "w-6/12" },
        { name: "Express", width: "w-5/12" },
        { name: "GraphQL", width: "w-2/12" },
        { name: "Gridsome", width: "w-2/12" },

      ],
    };
  },
};
</script>

<style scoped>
</style>