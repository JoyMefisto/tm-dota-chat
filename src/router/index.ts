import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from '@/views/pages/main/index.vue'

import {
  MainRoute,
  AuthRoute,
  PersonRoute
} from '@/constants/router'

const routes: Array<RouteRecordRaw> = [
  {
    ...MainRoute,
    meta: {
      isAuthRequired: true
    },
    component: MainView
  },
  {
    ...AuthRoute,
    meta: {
      isAuthRequired: false
    },
    component: () => import(/* webpackChunkName: "auth" */ '@/views/pages/auth/index.vue')
  },
  {
    ...PersonRoute,
    meta: {
      isAuthRequired: true
    },
    component: () => import(/* webpackChunkName: "person" */ '@/views/pages/person/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
