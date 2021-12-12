<template>
  <section class="text-container">
    <img src="~assets/music-note.svg" alt="music note" />
    <h1>The Game of Tones</h1>
    <p>Creative Music Making</p>
  </section>
</template>
<script></script>
<style scoped>
section {
  pointer-events: none;
  text-align: center;
}

img {
  animation: 1s glide infinite alternate-reverse ease-in-out;
}

@keyframes glide {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(10%);
  }
}

.text-container {
  position: absolute;
  top: 5em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}

section:first-child > h1 {
  /* Positioning */
  /* Box-model */
  /* Typography */
  font-weight: 400;
  font-size: 2.5rem;
  /* Visual */
  /* Misc */
}

section:first-child > p {
  font-size: 1rem;
}
</style>
