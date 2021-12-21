<template>
  <nav>
    <section class="circle gradient">
      <h1>VOLUME {{ volume }}</h1>
      <p>{{ title }}</p>
      <p>The Game of Tones</p>
    </section>
    <ul>
      <li v-for="chapter in chapters" :key="chapter.index" :class="chapter.index == 'intro' ? 'hue' : 'locked' "><NuxtLink :to="`${$route.fullPath}/intro`"><span>{{ chapter.index }}</span></NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
import pages from "~/static/pages.json"
export default {
  asyncData ({ params }) {
    const volumeInfo = pages[params.volume - 1]
    const {volume, title, chapters} = volumeInfo
    return {volume, title, chapters}
  }
}
</script>

<style scoped src="~/styles/circle.css"></style>
<style scoped>
nav {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7vh;
  color: var(--dark-blue);
}

h1, p:first-of-type {
  font-size: 2em;
}

p:first-of-type {
  margin-bottom: 2em;
}

.gradient {
  background: linear-gradient(135deg,var(--light-blue) 40%, var(--blue));
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translate(0, 0);}
  50% { transform: translate(0, 3%)}
  100% { transform: translate(0, 0);}
}
</style>