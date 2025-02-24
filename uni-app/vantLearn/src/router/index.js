/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 15:23:22
 * @LastEditTime: 2025-02-24 17:03:58
 * @FilePath: \vantLearn\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
//1，创建路由规则
const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: "layout",
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: "home",
        component: () => import('../views/home/home.vue')
      },
      {
        path: '/data',
        name: "data",
        component: () => import('../views/data/data.vue')
      },
      {
        path: '/addr',
        name: "addr",
        component: () => import('../views/addr/addr.vue')
      },
      {
        path: '/mine',
        name: "mine",
        component: () => import('../views/mine/mine.vue')
      },
    ]
  }
]
//2，创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
//3，创建登录组件
//4，指定出口
