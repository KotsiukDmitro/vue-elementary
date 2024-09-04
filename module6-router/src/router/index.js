import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Forget from '@/views/Forget.vue'
import DashBoard from '@/views/DashBoard.vue'
// import Mail from '@/views/Mail.vue'
import AppEmailBody from '@/components/AppEmailBody.vue'
import NotFound from '@/views/NotFound.vue'

const Mail = () => import('@/views/Mail.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login,
      alias: '/'
    },
    {
      path: '/forget',
      component: Forget,
      meta: {cantEnter: true}
    },
    {
      path: '/dashboard',
      component: DashBoard,
      name: 'dashboard',
      beforeEnter() {
        console.log('beforeEnter');
        
      }
    },
    {
      path: '/mail',
      component: Mail,
      name: 'email',
      children: [
        {path: ':mailId?', component: AppEmailBody, props: true}
      ]
    },
    {path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active',
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
    if(to.meta.cantEnter) {
      next(false)
      // next('/dashboard')
      // next({name: 'dashboard'})
    }else {
      next()
    }

router.afterEach((to, from, next) => {
console.log('afterEach');

})

})

export default router
