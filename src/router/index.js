import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


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
    name: '系統總覽',
    meta: { title: '系統總覽' },
    children: [
      {
        path: '',
        component: () => import('@/views/Home/index.vue'),
        name: '系統總覽',
        meta: { title: '系統總覽' }
      },
      {
        path: '/bookList',
        component: () => import('@/views/BookList/index.vue'),
        name: '書目列表',
        meta: { title: '書目列表' }
      },
      {
        path: '/statistics',
        component: () => import('@/views/Statistics/index.vue'),
        name: '閱讀統計',
        meta: { title: '閱讀統計' }
      },
      {
        path: '/calender',
        component: () => import('@/views/Calender/index.vue'),
        name: '活動日曆',
        meta: { title: '活動日曆' }
      },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
