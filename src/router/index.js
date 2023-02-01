import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tareas-crud',
    name: 'tareas-crud',
    component: () => import(/* webpackChunkName: "tareas-crud" */ '../views/Tareas-crud.vue')
  },
  {
    path: '/',
    name: '',
    component: HomeView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
