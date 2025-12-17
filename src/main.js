import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createWebHistory, createRouter } from 'vue-router';

import HView from './views/Home.vue';
import MView from './views/mediator.vue';
import AboutView from './views/B.vue';

const routes = [
  { path: '/', name: 'home', component: HView },
  { path: '/b', name: 'b', component: AboutView },
  { path: '/mediator/:mode', name: 'mediator', props: true, component: MView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
