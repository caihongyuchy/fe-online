import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../views/index.vue'),
        name: 'Index',
        meta: { title: '成员管理' },
      },
    ],
  },
  {
    path: '/career',
    component: Layout,
    children: [
      {
        path: '/index',
        component: () => import('../views/career.vue'),
        name: 'Career',
        meta: { title: '职位维护' },
      },
    ],
  },
  {
    path: '/team',
    component: Layout,
    children: [
      {
        path: '/index',
        component: () => import('../views/team.vue'),
        name: 'Team',
        meta: { title: '团队管理' },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
