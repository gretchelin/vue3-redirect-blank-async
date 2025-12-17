<template>
  <div style="padding: 10px;">
    Mediator page running async process
  </div>
</template>

<script setup>
import {computed, onMounted, toRefs} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'window',
  },
});

const {mode} = toRefs(props);
const router = useRouter();
const route = useRoute();

const target = computed(() => route?.query?.target);

onMounted(() => {
  setTimeout(() => {
    const url = new URL(window.location.href);

    if (mode.value === 'window') {
      const targetUrl = new URL('/b', url.origin);
      window.location.href = target.value || targetUrl.toString();
    } else {
      router.replace(target.value || '/b');
    }
  }, 3000);
});
</script>
