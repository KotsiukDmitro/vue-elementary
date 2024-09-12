import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Help from '@/views/Help.vue'
import Auth from '@/views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'main'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
      meta: {
        layout: 'main'
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        layout: 'auth'
      }
    },
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active'
})

export default router
