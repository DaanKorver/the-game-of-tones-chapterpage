<template>
  <div>
    <GotLogo></GotLogo>
    <form>
      <legend>
        <input type="text" required />
        <span class="bar"></span>
        <label>Username:</label>
      </legend>

      <legend>
        <input type="password" required />
        <span class="bar"></span>
        <label>Password:</label>
        <p>Forgot password or username?</p>
        <NuxtLink to="volume/1" class="cta-purple">SIGN IN</NuxtLink>
      </legend>
    </form>
  </div>
</template>
<script></script>
<style scoped>
div:first-child {
  background-color: var(--white-transparent);
}

form {
  /* Box-model */
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

legend {
  /* Positioning */
  position: relative;
  /* Box-model */
  margin-bottom: 3em;
}

legend:first-child {
    margin-top: 10em;
}

input {
  /* Positioning */
  /* Box-model */
  display: block;
  padding: 0.6em 0.6em 0.6em 0.3em;
  width: 24em;
  /* Typography */
  font-size: 1.5rem;
  /* Visual */
  background-color: transparent;
  border: none;
  border-bottom: 0.06em solid var(--text-color);
  /* Misc */
}

input:focus {
  outline: none;
}

label {
  /* Positioning */
  position: absolute;
  /* Box-model */
  left: 0.3em;
  top: 0.6em;
  /* Typography */
  font-size: 1.5rem;
  font-weight: normal;
  /* Visual */
  color: var(--text-color);
  /* Misc */
  transition: 0.2s ease all;
  pointer-events: none;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  /* Positioning */
  top: -1.25em;
  /* Box-model */
  /* Typography */
  font-size: 1rem;
  /* Visual */
  /* Misc */
}

span:nth-child(2) {
  /* Positioning */
  position: relative;
  /* Box-model */
  display: block;
}

span:nth-child(2):before,
span:nth-child(2):after {
  /* Positioning */
  position: absolute;
  /* Box-model */
  height: 0.125em;
  width: 0;
  /* Typography */
  /* Visual */
  background: var(--color-purple);
  /* Misc */
  content: "";
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
span:nth-child(2):before {
  left: 50%;
}
span:nth-child(2):after {
  right: 50%;
}

input {
  background-color: transparent;
}

input:focus ~ span:nth-child(2):before,
input:focus ~ span:nth-child(2):after {
  width: 50%;
}

input[type="text"] {
  font-family: "Poppins", sans-serif;
  color: var(--color-purple);
  background: transparent !important;
}

p {
  margin-top: 2em;
  margin-bottom: 3em;
}
</style>
