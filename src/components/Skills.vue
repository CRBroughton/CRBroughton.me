<template>
  <div class="w-full flex text-left text-lg font-medium font-inter px-4 pb-12 text-gray-800 md:justify-center">
    <div class="flex flex-col max-w-2xl w-full">
      <h1 class="text-xl font-semibold mb-4">Skills</h1>
      <p v-for="skill in skills" :key="skill">
        <p class="min-w-1/33 mb-2 mr-2 py-1 px-4 rounded text-sm transition duration-250 ease-in-out bg-green-300 hover:bg-green-500" :class="skill.width + ' ' + skill.end">{{skill.Language}}</p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { Language: "HTML", width: "w-full", },
        { Language: "GIT", width: "w-full" },
        { Language: "Linux", width: "w-full", },
        { Language: "CSS", width: "w-10/12", },
        { Language: "Tailwind", width: "w-10/12", },
        { Language: "Bootstrap", width: "w-10/12", },
        { Language: "Docker", width: "w-9/12" },
        { Language: "Javascript", width: "w-9/12" },
        { Language: "Typescript", width: "w-9/12" },
        { Language: "Vue", width: "w-9/12" },
        { Language: "PWA", width: "w-9/12" },
        { Language: "Astro", width: "w-8/12" },
        { Language: "Ansible", width: "w-7/12" },
        { Language: "Python", width: "w-6/12" },
        { Language: "Express", width: "w-5/12" },
        { Language: "GraphQL", width: "w-2/12" },
        { Language: "Gridsome", width: "w-2/12" },

      ],
    };
  },
};
</script>

<style scoped>
</style>