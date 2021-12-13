<template>
  <section>
    <div>
      <Sidebar></Sidebar>
      <AppHeader></AppHeader>
      <main>
        <h2>Introduction Volume 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          facilis eum nobis possimus sint, odio ratione odit alias quos nostrum
          ipsam iusto explicabo beatae cupiditate dolorum. Consequatur commodi
          libero doloribus.
        </p>
      </main>
    </div>
  </section>
</template>
<script>
export default {
  transition: {
    name: "layout",
    mode: "out-in",
  },
};
</script>
<style scoped>
section {
  /* Positioning */
  /* Box-model */
  height: 100vh;
  width: 100%;
  /* Typography */
  /* Visual */
  background-color: var(--white-transparent);
  /* Misc */
}

div {
  display: grid;
  grid-template-columns: 3.5em repeat(12, 1fr);
  grid-template-rows: 4em auto;
  height: 100%;
}
main {
  grid-column: 2/10;
  padding: 2rem;
}

h2 {
  /* Positioning */
  /* Box-model */
  /* Typography */
  font-weight: 400;
  font-size: 3rem;
  /* Visual */
  color: var(--blue);
  /* Misc */
}
</style>
