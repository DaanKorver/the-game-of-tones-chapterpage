<template>
  <nav>
    <section class="circle gradient">
      <h1>VOLUME 1</h1>
      <p>Making Melodies</p>
      <p>The Game of Tones</p>
    </section>
    <ul>
      <li class="hue"><NuxtLink to="/chapter"><span>Intro</span></NuxtLink></li>
      <li class="locked"><NuxtLink to=""><span>1</span></NuxtLink></li>
      <li class="locked"><NuxtLink to=""><span>2</span></NuxtLink></li>
      <li class="locked"><NuxtLink to=""><span>3</span></NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  
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