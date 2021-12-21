<template>
  <section :class="activeSubject">
    <div>
      <Sidebar :subject="subject"></Sidebar>
      <AppHeader :subject="subject"></AppHeader>
      <main>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </main>
      <OnionNav :lessons="lessons" :active="active" :subject="subject"/>
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
    return {title, body, lessons, active: params.lesson, subject: params.subject}
  },
  computed: {
    activeSubject: function() {
      const subjects = ["blue", "green", "yellow", "orange"]
      return subjects[this.subject - 1]
    }
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

.blue h2 {
  color: var(--blue);
}

.green h2 {
  color: var(--green);
}

.yellow h2 {
  color: var(--yellow);
}

.orange h2 {
  color: var(--orange);
}
</style>
