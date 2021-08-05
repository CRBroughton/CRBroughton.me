<template>
  <div class="w-full flex text-left text-lg font-medium font-inter px-4 pb-12 text-gray-800 md:justify-center">
    <div class="flex flex-col max-w-2xl w-full">
      <h1 class="text-xl font-semibold mb-4">Skills</h1>
      <li v-for="skill in skills" :key="skill">
        <p class="min-w-1/33 mb-2 mr-2 py-1 px-4 rounded text-sm transition duration-250 ease-in-out bg-green-300 hover:bg-green-500" :class="skill.width"><a :href=skill.url>{{skill.name}}</a></p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", width: "w-full", },
        { name: "GIT", url: "https://git-scm.com/", width: "w-full" },
        { name: "Linux", url: "https://en.wikipedia.org/wiki/Linux", width: "w-full", },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" , width: "w-10/12", },
        { name: "Tailwind", url: "https://tailwindcss.com",  width: "w-10/12", },
        { name: "Bootstrap", url: "https://getbootstrap.com", width: "w-10/12", },
        { name: "Docker", url: "https://www.docker.com", width: "w-9/12" },
        { name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", width: "w-9/12" },
        { name: "Typescript", url: "https://www.typescriptlang.org", width: "w-9/12" },
        { name: "Vue", url: "https://vuejs.org/", width: "w-9/12" },
        { name: "PWA", url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps", width: "w-9/12" },
        { name: "Astro", url: "https://astro.build", width: "w-8/12" },
        { name: "Ansible", url: "https://www.ansible.com", width: "w-7/12" },
        { name: "Python", url: "https://www.python.org", width: "w-6/12" },
        { name: "Express", url: "https://expressjs.com", width: "w-5/12" },
        { name: "GraphQL", url: "https://graphql.org", width: "w-2/12" },
        { name: "Gridsome", url: "https://gridsome.org", width: "w-2/12" },
        { name: "SASS", url: "https://sass-lang.com", width: "w-2/12" },
        { name: "Cypress", url: "https://www.cypress.io", width: "w-2/12" },
        { name: "Vue Test Utils", url: "https://next.vue-test-utils.vuejs.org/guide", width: "w-2/12" },

      ],
    };
  },
};
</script>

<style scoped>
</style>