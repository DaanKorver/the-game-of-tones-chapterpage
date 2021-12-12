<template>
  <aside>
    <div>
      <nav>Menu</nav>
      <p>Chapter</p>
    </div>
  </aside>
</template>
<script></script>
<style scoped>
aside {
  position: fixed;
  grid-column: 1/2;
  grid-row: 2/13;
}

aside > div {
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 5rem 1rem 0;
}
</style>
