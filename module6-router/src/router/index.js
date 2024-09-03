import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Forget from '@/views/Forget.vue'
import DashBoard from '@/views/DashBoard.vue'
import Mail from '@/views/Mail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      alias: '/'
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/mail',
      name: 'mail',
      component: Mail
    },
  ]
})

export default router
