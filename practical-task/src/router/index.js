import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CreateTask from '@/views/CreateTask.vue'
import TemplateTask from '@/components/TemplateTask.vue'
import ContentTask from '@/components/ContentTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/new-task',
      name: 'newTask',
      component: CreateTask
    },
    {
      path: '/task',
      name: 'task',
      component: TemplateTask
    },
    {
      path: '/task-content',
      name: 'task-content',
      component: ContentTask
    },
    
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active',
})

export default router
