<template>
  <header :class="activeSubject">
    <figure>
      <img src="~assets/music-note-black.svg" alt="music settings" />
    </figure>
    <figure>
      <img src="~assets/user.svg" alt="user settings" />
    </figure>
  </header>
</template>
<script>
export default {
  props: ['subject'],
  computed: {
    activeSubject: function() {
      const subjects = ["blue", "green", "yellow", "orange"]
      return subjects[this.subject - 1]
    }
  }
}
</script>
<style scoped>
header {
  /* Positioning */
  /* Box-model */
  padding: 0.3em 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  grid-column: 2/14;
  /* Typography */
  /* Visual */
  background-color: var(--light-blue);
  /* Misc */
}

header.blue {
  background-color: var(--light-blue);
}

header.green {
  background-color: var(--light-green);
}

header.yellow {
  background-color: var(--light-yellow);
  color: var(--text-color);
}

header.orange {
  background-color: var(--light-orange);
}

figure {
  /* Positioning */
  position: relative;
  /* Box-model */
  width: 2.5em;
  height: 2.5em;
  margin: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Typography */
  /* Visual */
  background-color: var(--white);
  border-radius: 50%;
  /* Misc */
}

figure:last-child::before {
  /* Positioning */
  position: absolute;
  left: -1em;
  /* Box-model */
  width: 2px;
  height: 100%;
  /* Typography */
  /* Visual */
  background-color: var(--white);
  /* Misc */
  content: "";
}

img {
  margin: 0 auto;
  height: 60%;
  width: auto;
}
</style>
