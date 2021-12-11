<template>
  <div>
    <section>
      <img src="~assets/music-note.svg" alt="music note">
      <h1>The Game of Tones</h1>
      <p>Creative Music Making</p>
    </section>
    <div class="carousel-container">
      <VueSlickCarousel :arrows="false" :dots="true">
        <section>
          <h2>
            Acquire <span>the</span> tools <span>to</span> discover <br />
            <span>and</span> express <span> your</span> own musical style
          </h2>
          <NuxtLink to="Login" class="cta-purple">SKIP</NuxtLink>
        </section>
        <section>
          <h2>
            Develop <span>a</span> dynamic perspective
            <span>by <br />connecting</span>concious connections
            <span>between</span><br />
            theory <span> and</span> practice
          </h2>
          <NuxtLink to="Login" class="cta-purple">SKIP</NuxtLink>
        </section>
        <section>
          <h2>
            Broaden <span>your</span> musical knowledge <br />
            <span>through a</span>comprehensive approach
          </h2>
          <NuxtLink to="Login" class="cta-purple">GET STARTED</NuxtLink>
          <p>Already have an account?</p>
          <NuxtLink to="Login">Sign in</NuxtLink>
        </section>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
      },
    };
  },
};
</script>
<style scoped>
section {
  text-align: center;
}

img {
  padding-top: 5em;
  animation: 1s glide infinite alternate-reverse ease;
}

@keyframes glide {
  from {
    transform: translateY(0%)
  }
  to {
    transform: translateY(5%)
  }
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
  font-size: 1.5rem;
}

.carousel-container section {
  /* Positioning */
  /* Box-model */
  height: 20em;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* Typography */
  /* Visual */
  /* Misc */
}

.carousel-container section > a {
  /* Positioning */
  /* Box-model */
  align-self: flex-start;
  margin: 0 auto;
  /* Typography */
  /* Visual */
  /* Misc */
}

h2 {
  /* Positioning */
  /* Box-model */
  margin-bottom: 0.5em;
  /* Typography */
  font-size: 2.5rem;
  /* Visual */
  /* Misc */
}

span {
  font-weight: 400;
}
</style>
