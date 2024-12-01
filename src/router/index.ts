// 创建路由
import Error404 from "@/pages/Error404.vue";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Category from "@/pages/product/Category.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    // 登录页面
    {
      path: '/login',
      component: Login
    },
    // 默认打开为home页面
    {
      path: '/',
      redirect: '/home'
    },
    // 主页
    {
      path: '/home',
      component: Home
    },
    // 商品
    {
      path: '/product',
      children: [
        // 商品分类
        {
          path: 'category',
          component: Category
        }
      ]
    },
    // 错误页面 兜底页面
    {
      path: '/:pathMatch(.*)',
      component: Error404
    },
  ]
})

// 默认导出router
export default router