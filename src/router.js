import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/authentication/Login'
import Dashboard from './components/dashboard/Dashboard'
import Event from './components/event/EventMain'
import Hospital from './components/hospital/HospitalMain'
import Account from './components/account/AccountMain'
import Company from './components/company/CompanyMain'
import MapMain from './components/map/MapMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/companies',
      name: 'companies',
      component: Company,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/events',
      name: 'event',
      component: Event,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/hospitals',
      name: 'hospital',
      component: Hospital,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Account,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/map',
      name: 'map',
      component: MapMain,
      meta: {
        requiresAuth: true,
      }
    },
  ]
})
