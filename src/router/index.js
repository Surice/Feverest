import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/home.vue'
import Intro from '@/views/intro.vue'
import Proj from '@/views/projects.vue'
import Impressum from '@/views/impressum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Introduction',
    component: Intro
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Proj
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  }
]

const router = new VueRouter({
  routes
});

export default router
