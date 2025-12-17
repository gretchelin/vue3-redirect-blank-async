<script setup>
</script>

<template>
  <div style="box-sizing: border-box; padding: 20px;">
    <RouterLink to="/">Go Home</RouterLink>
  </div>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
