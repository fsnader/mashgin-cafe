import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/Menu.vue'),
      },
      {
        path: '/my-cart',
        name: 'MyCart',
        component: () => import('@/views/MyCart.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/views/MyCart.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
