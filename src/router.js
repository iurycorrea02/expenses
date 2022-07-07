import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import SignUp from './pages/register/SignUp.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // component: () => import(/* webpackChunkName: "home" */ './pages/home/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // component: () => import(/* webpackChunkName: "login" */ './pages/login/Login')
    },
    {
      path: '/register',
      name: 'signUp',
      component: SignUp
    }
  ]
})

export default router
