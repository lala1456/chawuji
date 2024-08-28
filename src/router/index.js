import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'
//createRouter 创建路由实例
//配置history模式
//history模式：createWebHistory  地址栏不带#
//hash模式：createWebHashHistory 地址栏带#
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/LayoutPage.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: import('@/views/HomePage.vue')
        },
        {
          path: 'drink',
          component: import('@/views/DrinkPage.vue')
        },
        {
          path: 'ingredient',
          component: import('@/views/IngredientPage.vue')
        },
        {
          path: 'brand',
          component: import('@/views/BrandPage.vue')
        },
        {
          path: 'about',
          component: import('@/views/AboutPage.vue')
        }
      ]
    }
  ]
})

// //登录访问拦截
// router.beforeEach((to) => {
//   //如果没有token，且访问的时非登录页，拦截到登录页，其他情况正常放行
//   const useStore = useUserStore()
//   if (!useStore.token && to.path !== '/login') return '/login'
//   return true
// })
export default router
