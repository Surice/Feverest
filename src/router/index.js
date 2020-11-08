import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home.vue'
import Intro from '@/views/intro.vue'
import Proj from '@/views/projects.vue'
import Portal from '@/views/portals.vue'
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
    path: '/portals',
    name: 'Portals',
    component: Portal
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
