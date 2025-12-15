<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { computed } from 'vue';

const currentUrl = computed(() => {
  return new URL(window.location.href);
});

const goA = (mode) => {
  window.open(
    new URL(`/mediator/${mode}`, currentUrl.value.origin).toString(),
    '_blank'
  );
};

const goB = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 2000);
  });

  window.open(new URL('/b', currentUrl.value.origin).toString(), '_blank');
};

const goTarget = () => {
  window.open(new URL('/b', currentUrl.value.origin).toString(), '_blank');
};
</script>

<template>
  <div>
    <RouterLink to="/" target="_blank"> Go Home </RouterLink>
    <button type="button" @click="goA('window')">
      Go A with mediator page: window
    </button>
    <button type="button" @click="goA('router')">
      Go A with mediator page: router
    </button>
    <button type="button" @click="goB">Go B after async process 2s</button>
    <button type="button" @click="goTarget">Go Target</button>
  </div>

  <main>
    <RouterView />
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
