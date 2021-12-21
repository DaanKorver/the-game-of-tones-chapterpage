<template>
  <section>
    <div>
      <Sidebar></Sidebar>
      <AppHeader></AppHeader>
      <main>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </main>
    </div>
  </section>
</template>
<script>
import pages from "~/static/pages.json"
export default {
  asyncData ({ params }) {
    const volumeInfo = pages[params.volume - 1]
    const chapterInfo = volumeInfo.chapters[params.chapter]
    const {title, body, lessons} = chapterInfo
    console.log(params);
    return {title, body, lessons, active: params.lesson}
  },
  transition: {
    name: "layout",
    mode: "out-in",
  },
};
</script>
<style scoped>
section {
  /* Positioning */
  /* Box-model */
  height: 100vh;
  width: 100%;
  /* Typography */
  /* Visual */
  background-color: var(--white-transparent);
  /* Misc */
}

div {
  display: grid;
  grid-template-columns: 3.5em repeat(12, 1fr);
  grid-template-rows: 4em auto;
  height: 100%;
}
main {
  grid-column: 2/10;
  padding: 2rem;
}

h2 {
  /* Positioning */
  /* Box-model */
  /* Typography */
  font-weight: 400;
  font-size: 3rem;
  /* Visual */
  color: var(--blue);
  /* Misc */
}
</style>
