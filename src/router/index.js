import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: '登入頁面',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
    name: '首頁',
    meta: { title: '書目清單' },
    children: [
      {
        path: '',
        component: () => import('@/views/BookList/index.vue'),
        name: 'booklist',
        meta: { title: '書目清單' }
      },
      {
        path: '/bookList',
        component: () => import('@/views/BookList/index.vue'),
        name: 'booklist',
        meta: { title: '書目清單' }
      },
      {
        path: '/bookList-detail',
        component: () => import('@/views/BookList/detail.vue'),
        name: 'book-detail',
        meta: { title: '書籍詳情' }
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
