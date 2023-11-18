import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const routes = [
  { path: '/', name:'home', component: HomePage },
  { path: '/pineapple', name: 'pineapple', component: () => import('@/pages/PineapplePage.vue') },
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router