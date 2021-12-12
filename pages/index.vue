<template>
  <div>
    <GotLogo></GotLogo>
    <div class="carousel-container">
      <VueSlickCarousel v-bind="settings">
        <section class="light-blue">
          <h2>
            Acquire <span>the</span> tools <span>to</span> discover <br />
            <span>and</span> express <span> your</span> own musical style
          </h2>
          <NuxtLink to="Login" class="cta-purple">SKIP</NuxtLink>
        </section>
        <section class="light-green">
          <h2>
            Develop <span>a</span> dynamic perspective
            <span>by <br />connecting</span>concious connections
            <span>between</span><br />
            theory <span> and</span> practice
          </h2>
          <NuxtLink to="Login" class="cta-purple">SKIP</NuxtLink>
        </section>
        <section class="light-yellow">
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
import GotLogo from "../components/GotLogo.vue";
// optional style for arrows & dots
export default {
  name: "MyComponent",
  components: { VueSlickCarousel, GotLogo },
  data() {
    return {
      settings: {
        dots: true,
        autoplay: true,
        autoplayspeed: 3000,
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

section:last-child > p {
  margin-top: 1.5em;
}

.carousel-container section {
  /* Positioning */
  /* Box-model */
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* Typography */
  /* Visual */
  /* Misc */
}

.light-blue {
  background-color: var(--light-blue-transparent);
}

.light-green {
  background-color: var(--light-green-transparent);
}

.light-yellow {
  background-color: var(--light-yellow-transparent);
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
  color: var(--text-color);
  /* Misc */
}

span {
  font-weight: 400;
}

.slick-dots li.slick-active {
  opacity: 0.75;
}

.slick-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
