<template>
  <a-result title="Info" sub-title="Info page">
    <template #extra>
      <pre style="text-lign:left;">
        Summary instruction for run this project:
        #1 npm install - Install all packages
        #2 npm run serve - Run in dev mode
        #3 npm run build - bBuild sources

        Minimal browser supports
          "edge": "12",
          "firefox": "5",
          "chrome": "20",
          "safari": "7"
      </pre>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
h4 {
  color: blueviolet;
  font-weight: bolder;
  font-size: 2.5rem;
}
</style>
