/*
 * @Author: whr2349
 * @Date: 2021-03-04 16:02:19
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-09 15:30:40
 * @Description: file content
 * @FilePath: \webadmin\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index/question/questionlist',
    },
    {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
        meta: {title: "首页"},
        redirect: '/index/question/questionlist',
        children: [
            {
                path: 'question/questionlist',
                name: 'question',
                component: () => import(/* webpackChunkName: "about" */ '../views/question/questionlist.vue'),
                meta: {title: "题库管理"}
            },
            {
                path: 'activity/activitylist',
                name: 'activity',
                component: () => import(/* webpackChunkName: "about" */ '../views/activity/activitylist.vue'),
                meta: {title: "活动管理"}
            },
            {
                path: 'sys/user',
                name: 'sys',
                component: () => import(/* webpackChunkName: "about" */ '../views/sys/user.vue'),
                meta: {title: "用户管理"}
            },
        ]
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
