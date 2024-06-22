import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '系統總覽' },
    children: [
      {
        path: '',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '系統總覽' }
      },
      {
        path: '/bookList',
        component: () => import('@/views/BookList/index.vue'),
        meta: { title: '書目列表' }
      },
      {
        path: '/statistics',
        component: () => import('@/views/Statistics/index.vue'),
        meta: { title: '閱讀統計' }
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
