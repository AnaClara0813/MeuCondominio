import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './page/index.vue';
import LoginPage from './page/login/index.vue';
import PainelPage from './page/painel/index.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/painel', component: PainelPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
