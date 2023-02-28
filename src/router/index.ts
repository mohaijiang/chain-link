import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SubscriptionView from '../views/SubscriptionView.vue';
import FunctionsRequest from '@/views/FunctionsRequest.vue';
import FunctionsConsumer from '@/views/FunctionsConsumer.vue';
import SubscriptionDetail from '../views/SubscriptionDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Subscription',
    component: SubscriptionView
  },
  {
    path: '/subscription-detail',
    name: 'SubscriptionDetail',
    component: SubscriptionDetail
  },
  {
    path: '/functions-request',
    name: 'FunctionsRequest',
    component: FunctionsRequest
  },
  {
    path: '/functions-consumer',
    name: 'FunctionsConsumer',
    component: FunctionsConsumer
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
