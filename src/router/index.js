import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [{
      path: '',
      // 首页的main内容
      component: () => import(/* webpackChunkName: "about" */ '../views/main/main.vue')
    }, {
      path: 'learn',
      // 在线学习的main内容
      component: () => import(/* webpackChunkName: "about" */ '../views/learn/learn.vue')
    }, {
      path: 'practice',
      // 在线练习的main内容
      component: () => import(/* webpackChunkName: "about" */ '../views/practice/practice.vue')
    }, {
      path: 'exam',
      // 在线考试的main内容
      component: () => import(/* webpackChunkName: "about" */ '../views/exam/exam.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
