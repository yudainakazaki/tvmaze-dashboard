import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        return {path: 'browse'}
      }
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/Browse.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Detail.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    }
  ]
})

export default router
