import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Test from '@/views/test/test.component.vue'

import Home from '@/views/main/home/home.component.vue'
import Introduction from '@/views/main/introduction/introduction.component.vue'
import Projects from '@/views/main/projects-hub/projects.component.vue'
import Portals from '@/views/main/portals-hub/portals.component.vue'
import Impressum from '@/views/main/impressum/impressum.component.vue'

import FreeGames from '@/views/projects/freeGames/freeGames.component.vue'
import McCGuide from '@/views/projects/mcCGuide/mcCGuide.component.vue'
import FuelCalculator from '@/views/projects/fuelCalculator/fuelCalculator.component.vue'

import DevHome from '@/views/portal-dev/home/home.component.vue'
import DevLogin from '@/views/portal-dev/login/login.component.vue'

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
    component: Introduction
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/portals',
    name: 'Portals',
    component: Portals
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
    component: FuelCalculator
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
        next();
        //next('/dev-portal/login');
      }
    }
  },
  {
    path: '/dev-portal/login',
    name: 'Dev-Login',
    component: DevLogin
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  routes
});

export default router
