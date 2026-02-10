import { createRouter, createWebHistory } from 'vue-router'

// Import components
import Home from './App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Your Name - Frontend Engineer',
      description: 'Frontend Engineer building accessible, pixel-perfect digital experiences for the web.'
    }
  },
  // Future routes can be added here for blog posts, project details, etc.
  // {
  //   path: '/projects/:slug',
  //   name: 'ProjectDetail', 
  //   component: () => import('./views/ProjectDetail.vue')
  // }
]

export function createAppRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }
      return { top: 0 }
    }
  })
}