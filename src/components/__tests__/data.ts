export const routes = [
    {
      path: '/browse',
      name: 'browse',
      component: () => import('@/views/Browse.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/Detail.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue')
    }
]