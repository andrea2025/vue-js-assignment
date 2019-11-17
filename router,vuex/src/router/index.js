import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageHome from '../components/pagehome'
//import PageSettingsProfile from './components/pages/SettingsProfile'
//import PageSettingsEmail from './components/pages/SettingsEmail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'Welcome to my blog!'
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

{ path: '/pagehome',
name: 'pagehome',
component: PageHome
},
// {
// path: '/user/:userId',
// name: 'user',
// component: PageUser
// }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
