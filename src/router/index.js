import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from '@/views/main/home.vue'
import Intro from '@/views/main/intro.vue'
import Proj from '@/views/main/projects.vue'
import Portal from '@/views/main/portals.vue'
import Impressum from '@/views/main/impressum.vue'

import FreeGames from '@/views/projects/freeGames.vue'
import McCGuide from '@/views/projects/mcCGuide.vue'
import Acchelper from '@/views/projects/accHelper.vue'

import DevHome from '@/views/dev-portal/home.vue'
import DevLogin from '@/views/dev-portal/login.vue'

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
    path: '/project/free_Games',
    name: 'Free-Games',
    component: FreeGames
  },
  {
    path: '/project/mc_c_guide',
    name: 'MC-Crafting-Guide',
    component: McCGuide
  },
  {
    path: '/project/acc_helper',
    name: 'ACC-Helper',
    component: Acchelper
  },
  {
    path: '/dev-portal/home',
    name: 'Dev-Home',
    component: DevHome,
    beforeEnter: async (to, from, next) => {
      try{
        let check = await axios.get('https://feverest.de/api/user/checkToken');
  
        if(check.status != 200 || check.data.role != "dev"){
          next('/dev-portal/login');
        }

        next();
      }catch(err){
        next('/dev-portal/login');
      }
    }
  },
  {
    path: '/dev-portal/login',
    name: 'Dev-Login',
    component: DevLogin
  }
]

const router = new VueRouter({
  routes
});

export default router
