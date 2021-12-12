<template>
  <nav>
    <div class="circle hue">

    </div>
    <ul>
      <li><span>Intro</span></li>
      <li><span>1</span></li>
      <li class="hue"><span>2</span></li>
      <li><span>3</span></li>
    </ul>
    <p>Chapters</p>
  </nav>
</template>

<style scoped>
nav {
  /* Positioning */
  left: 50%;
  top: 50%;
  position: fixed;
  /* Box-model */
  /* Typography */
  /* Visual */
  background-color: rgba(0, 0, 0, .7);
  /* Misc */
  transform: translate(-50%,-50%);
  text-align: center;
}

.circle {
  width: 30em;
  height: 30em;
}

.hue {
  /* Positioning */
  /* Box-model */
  /* Typography */
  /* Visual */
  background-blend-mode: screen;
  background: radial-gradient(circle closest-side, white, black 90%), 
  conic-gradient(#0080ff, #8000ff, fuchsia,
              #ff0080, red, #ff8000, yellow, 
              #80ff00, lime, #00ff80, aqua, 
              #0080ff);
  border-radius: 50%;
  position: relative;
  /* Misc */
}

.hue::before {
  /* Positioning */
  position: absolute;
  /* Box-model */
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  /* Typography */
  /* Visual */
  background-color: #fff;
  /* Misc */
  transform: translate(-50%,-50%);
  opacity: .6;
  border-radius: 50%;
  content: "";
}

.hue::after {
  /* Positioning */
  position: absolute;
  /* Box-model */
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  /* Typography */
  /* Visual */
  background-color: #0080ff;
  /* Misc */
  border-radius: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  content: "";
  opacity: .6;
  mix-blend-mode: multiply;
}

ul {
  display: flex;
  list-style: none;
}

ul > li {
  border-radius: 50%;
/* Positioning */
  position: relative;
  /* Box-model */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  margin-right: 2em;
  padding: 1em;
  /* Typography */
  /* Visual */
  background-color: lightgray;
  color: #244768;
  /* Misc */
}

ul > li span {
  z-index: 5;
}

ul > li:not(:last-child) span::after {
  /* Positioning */
  position: absolute;
  right: 0; 
  top: 50%;
  /* Box-model */
  width: 2em;
  height: 2px;
  /* Typography */
  /* Visual */
  background: #fff;
  /* Misc */
  content: "";
  transform: translateX(100%) translateY(-50%);
}

ul > li.hue {
  color: #fff;
}

ul > li:last-child {
  margin-right: 0;
}
</style>