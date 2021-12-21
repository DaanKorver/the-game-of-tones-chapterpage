<template>
  <aside :class="activeSubject">
    <div>
      <nav>
        <NuxtLink to="/menu">
          <img src="~assets/menu-button.svg" alt="Menu Button" />
          <p>Menu</p>
        </NuxtLink>
      </nav>
      <p>Chapter</p>
    </div>
  </aside>
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
aside {
  /* Positioning */
  /* Box-model */
  grid-column: 1/2;
  grid-row: 1/3;
  padding: 1em 0.5em;
  height: 100%;
  /* Typography */
  /* Visual */
  color: var(--white);
  background-color: var(--blue);
  /* Misc */
}

aside.blue {
  background-color: var(--blue);
}

aside.green {
  background-color: var(--green);
}

aside.yellow {
  background-color: var(--yellow);
  color: var(--text-color);
}

aside.orange {
  background-color: var(--orange);
}

aside > div {
  /* Positioning */
  position: sticky;
  top: 0;
  left: 0;
  /* Box-model */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
}

div > nav {
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  /* Misc */
}

nav > img {
  width: 70%;
}

p {
  font-size: 1rem;
}

div > p:last-child {
  /* Positioning */
  /* Box-model */
  margin: auto 0;
  /* Typography */
  writing-mode: vertical-rl;
  font-size: 1.5rem;
  text-orientation: sideways-right;
  /* Visual */
  /* Misc */
  transform: scale(-1);
}

button {
  all: unset;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
