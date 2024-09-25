import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Help from '@/views/Help.vue'
import Auth from '@/views/Auth.vue'
import Request from '@/views/Request.vue'
import { useAuthUserStore } from '@/stores/auth-module'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/request/:id',
      name: 'request',
      component: Request,
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        layout: 'auth',
        auth: false
      }
    },
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active'
})


router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  const store = useAuthUserStore()
  if (requireAuth && store.isAuthenticated) {
    next()
  } else if (requireAuth && !store.isAuthenticated) {
    next('/auth?massage=auth')
  } else {
    next()
  }
})

export default router
