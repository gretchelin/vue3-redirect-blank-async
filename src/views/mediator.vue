<template>
  <div>Mediator page running async process</div>
</template>

<script setup>
import { onMounted, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'window',
  },
});

const { mode } = toRefs(props);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    const url = new URL(window.location.href);

    if (mode.value === 'window') {
      const targetUrl =  new URL('/b', url.origin);
      window.location.href = targetUrl.toString();
    } else {
      router.replace('/b');
    }
  }, 3000);
});
</script>
