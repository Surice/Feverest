import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/main/home.vue'
import Intro from '@/views/main/intro.vue'
import Proj from '@/views/main/projects.vue'
import Portal from '@/views/main/portals.vue'
import Impressum from '@/views/main/impressum.vue'

import FreeGames from '@/views/projects/freeGames.vue'
import McCGuide from '@/views/projects/mcCGuide.vue'
import acchelper from '@/views/projects/accHelper.vue'

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
  },
  {
    path: '/free_Games',
    name: 'Free-Games',
    component: FreeGames
  },
  {
    path: '/mc_c_guide',
    name: 'MC-Crafting-Guide',
    component: McCGuide
  },
  {
    path: '/acc_helper',
    name: 'ACC-Helper',
    component: acchelper
  }
]

const router = new VueRouter({
  routes
});

export default router
