<template>
  <nav>
    <a @click="$router.go(-1)" class="close">Close</a>
    <div class="circle hue">
      <MenuPaths :active="chapter" v-for="index in 3" :key="index" :chapter="index"/>
    </div>
    <ul>
      <li v-for="index in 3" :key="index" @click="changeMenu" :data-chapter="index"><span>{{index}}</span></li>
    </ul>
    <p>Chapters</p>
  </nav>
</template>

<script>
export default {
  data: ()=>{
    return {chapter: 1}
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeMenu(event) {
      this.chapter = event.currentTarget.dataset.chapter
    }
  }
}
</script>

<style scoped src="~/styles/circle.css"></style>
<style scoped>
nav {
  /* Positioning */
  left: 50%;
  top: 50%;
  position: fixed;
  z-index: 100;
  /* Box-model */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7vh;
  /* Typography */
  text-align: center;
  /* Visual */
  transform: translate(-50%, -50%);
  /* Misc */
}

.circle {
  opacity: 0;
  animation: appear .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards .2s;
}

@keyframes appear {
  from {
    visibility: hidden;
    opacity: 0;
    transform: scale(.7);
  }
  to {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}

p {
  font-weight: 700;
  color: var(--white);
}

.close {
  /* Positioning */
  position: fixed;
  left: 2em;
  top: 2em;
  margin-left: 1.5em;
  /* Box-model */
  /* Typography */
  font-family: "Poppins";
  font-size: 1em;
  /* Visual */
  background-color: transparent;
  border: transparent;
  outline: transparent;
  color: var(--white);
  text-decoration: none;
  /* Misc */
  cursor: pointer;
}

.close::before {
  /* Positioning */
  position: absolute;
  left: -1.5em;
  top: 50%;
  /* Box-model */
  /* Typography */
  /* Visual */
  border-right: 0.7em solid var(--white);
  border-top: 0.5em solid transparent;
  border-bottom: 0.5em solid transparent;
  transform: translateY(-50%);
  /* Misc */
  content: "";
}

ul > li {
  background-color: #fff;
  pointer-events: all;
}
</style>