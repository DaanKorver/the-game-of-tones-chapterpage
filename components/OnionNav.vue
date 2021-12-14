<template>
  <nav>
    <ul>
      <OnionItem
        v-for="(lesson, index) in lessons"
        :key="index"
        :class="lesson.state"
        :active="lesson.state == 'active'"
      >
        {{ lesson.lesson }}
      </OnionItem>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      lessons: [
        { lesson: "Intro", state: "done" },
        { lesson: "1.1", state: "done" },
        { lesson: "1.2", state: "active" },
        { lesson: "1.3", state: "locked" },
        { lesson: "1.4", state: "locked" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  grid-column: 12/14;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  /* Typography */
  /* Visual */
  list-style: none;
  /* Misc */
}
</style>