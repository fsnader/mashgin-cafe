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
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/views/CheckoutCart.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
