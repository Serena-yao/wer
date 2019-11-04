import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/index.vue'
import Timeline from '../views/home/timeline.vue'
import My from '../views/home/my.vue'
import Login from '../views/home/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/register',
    component: null
  },
  {
    path: '/favor',
    component: null
  },
  {
    path: '/info',
    component: null
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: '/home/timeline',
      component: Timeline
    },
    {
      path: '/home/my',
      component: My
    }]
  },
  {
    path: '/comment',
    component: null,
    children: [{
      path: '/comment/receive',
      component: null
    },
    {
      path: '/comment/send',
      component: null
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
