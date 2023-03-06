import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import AuthPage from "./pages/AuthPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomePage},
    {path: '/auth', component: AuthPage},
  ]
})

export default router;