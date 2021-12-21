<template>
  <nav>
    <ul>
      <OnionItem
        v-for="lesson in lessons"
        :key="lesson.index"
        :index="lesson.index"
        :class="lesson.index == active ? 'active' :''"
        :active="lesson.index == active"
        :subject="subject"
      >
        {{ lesson.index == 'intro' ? lesson.index : `1.${lesson.index}` }}
      </OnionItem>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['lessons','active', 'subject'],
  mounted: function() {
    console.log(this.subject);
  }
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