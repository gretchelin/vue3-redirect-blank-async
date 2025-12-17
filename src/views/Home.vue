<script setup>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';

const currentUrl = computed(() => {
  return new URL(window.location.href);
});

const target = ref('https://google.com');
const useTarget = ref(false);
const isProcess = ref(false);

const route = useRoute();

const isHome = computed(() => {
  return route.name === 'home';
})

const goA = (mode) => {
  window.open(
      new URL(`/mediator/${mode}?target=${useTarget.value ? target.value : ''}`, currentUrl.value.origin).toString(),
      '_blank'
  );
};

const goB = async () => {
  isProcess.value = true;

  await new Promise((res) => {
    setTimeout(() => {
      window.open(useTarget?.value ? target.value : new URL('/b', currentUrl.value.origin).toString(), '_blank');
    }, 2000);
  });

  isProcess.value = false;
};

const goTarget = () => {
  if (useTarget.value) {
    window.open(target.value, '_blank');
  }
  window.open(new URL('/b', currentUrl.value.origin).toString(), '_blank');
};
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
    <label>
      <input v-model="useTarget" name="use_target" type="checkbox"/>
      Use custom target
    </label>


    <div
        v-if="useTarget"
        style="background:#e56f4f; color:white; padding: 10px; width: 70%; border-radius: 10px; margin: 0 auto; font-size: 12px;"
    >
      "Go to target through mediator page: router" will not work as intended as it is using window.history.replace
      if using custom target (custom target is always treated as different domain for this PoC, and thus does not fit
      the point of using window.history.replace)
    </div>

    <input
        v-model="target"
        type="text"
        placeholder="Type link as redirect target"
        name="target"
        style="width: 100%; padding: 10px 16px; box-sizing: border-box;"
    />
  </div>

  <div style="display: flex; gap: 10px; align-items: center;">
    <button type="button" @click="goA('window')">
      Go target through mediator page: window
    </button>
    <button type="button" @click="goA('router')">
      Go target through mediator page: router
    </button>
    <button type="button" @click="goB">Go target after async process 2s</button>
    <button type="button" @click="goTarget">Go Target</button>
  </div>
</template>