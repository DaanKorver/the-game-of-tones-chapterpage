<template>
  <div>
    <section>
      <h1>The Game of Tones</h1>
      <p>Creative Music Making</p>
    </section>
    <section class="carousel">
      <div class="carousel-track-container">
        <ul class="carousel-track">
          <li class="carousel-slide">
            <p>
              <span> Acquire </span> the <span> tools </span> to
              <span> discover </span> <br />
              and <span>express </span> your <span>own musical Style</span>
            </p>
            <NuxtLink to="login" class="cta-purple">SKIP</NuxtLink>
          </li>
          <li class="carousel-slide">
            <p>
              <span> Develop </span> a <span> dynamic perspective </span> by
              <br />
              connecting <span>concious connections</span> between <br />
              <span>theory and practice</span>
            </p>
            <NuxtLink to="login" class="cta-purple">SKIP</NuxtLink>
          </li>
          <li class="carousel-slide">
            <p>
              <span> Broaden</span> your <span>musical knowledge</span> <br />
              through a <span>comprehensive approach</span>
            </p>
            <NuxtLink to="login" class="cta-purple">GET STARTED</NuxtLink>
          </li>
        </ul>
      </div>
      <nav class="carousel-nav">
        <button class="carousel-indicator"></button>
        <button class="carousel-indicator"></button>
        <button class="carousel-indicator"></button>
      </nav>
    </section>
  </div>
</template>
<script>
export default {
  methods: {

  }
};
</script>
<style scoped>
section {
  text-align: center;
}
section:first-child > h1 {
  /* Positioning */
  /* Box-model */
  padding-top: 5em;
  /* Typography */
  font-weight: 400;
  font-size: 2.5rem;
  /* Visual */
  /* Misc */
}

section:first-child > p {
  font-size: 1.5rem;
}

section:nth-child(2) {
  position: relative;
  height: 30em;
  width: 100%;
  margin: 0 auto;
}

.carousel-track-container {
  /* Positioning */
  position: relative;
  /* Box-model */
  height: 100%;
  /* Typography */
  /* Visual */
  /* Misc */
}

ul {
  /* Positioning */
  /* Box-model */
  padding: 0;
  margin: 0;
  /* Typography */
  /* Visual */
  list-style: none;
  /* Misc */
}

li {
  /* Positioning */
  position: absolute;
  top: 50%;
  bottom: 0;
  /* Box-model */
  width: 100%;
  /* Typography */
  font-size: 2.5em;
  /* Visual */
  /* Misc */
  transform: translateY(-50%);
}

span {
  font-weight: 700;
}

nav {
  /* Positioning */
  /* Box-model */
  display: flex;
  justify-content: center;
  padding: 1em 0;
  /* Typography */
  /* Visual */
  /* Misc */
}

button {
  /* Positioning */
  /* Box-model */
  width: 1em;
  height: 1em;
  margin: 0 0.5em;
  /* Typography */
  /* Visual */
  border: 0;
  border-radius: 50%;
  /* Misc */
  cursor: pointer;
}

/* .carousel-indicator.current-slide {
  background: black;
} */
</style>
