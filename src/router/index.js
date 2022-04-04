import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '@/views/OrderView.vue'
import OrderCompleteView from '@/views/OrderCompleteView.vue'
import BakerLoginView from '@/views/BakerLoginView.vue'
import BakerAdminView from '@/views/BakerAdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bakery/login',
    name: 'login',
    component: BakerLoginView
  },
  {
    path: '/bakery/admin',
    name: 'admin',
    component: BakerAdminView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/order/received',
    name: 'received',
    component: OrderCompleteView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
