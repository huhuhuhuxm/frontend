// 创建路由
import Error404 from '@/pages/Error/index.vue';
import Home from '@/pages/Home/index.vue';
import Login from '@/pages/Login/index.vue';
import Category from '@/pages/Product/Category/index.vue';
import Register from '@/pages/Register/index.vue';
import Layout from '@/pages/Layout/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 登录页面
    {
      path: '/login',
      component: Login,
    },
    // 用户注册
    {
      path: '/register',
      component: Register,
    },
    // layout
    {
      path: '/',
      component: Layout,
      children: [
        // // 默认打开为home页面
        // {
        //   path: '/',
        //   redirect: '/home',
        // },
        // 主页
        {
          path: '',
          component: Home,
        },
        // 商品
        {
          path: '/product',
          children: [
            // 商品分类
            {
              path: 'category',
              component: Category,
            },
          ],
        },
        // 错误页面 兜底页面
        {
          path: '/:pathMatch(.*)',
          component: Error404,
        },
      ],
    },
  ],
});

// 默认导出router
export default router;
