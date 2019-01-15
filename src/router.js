import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

function loadPage (page) {
  return () => import(/* webpackChunkName: "page-[request]" */ `@/pages/Page${page}Setup.vue`)
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/account',
      name: 'account',
      component: loadPage('Account')
    },
    {
      path: '/vaccines',
      name: 'vaccines',
      component: loadPage('VaccineReminder')
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: loadPage('AppointmentReminder')
    },
    {
      path: '/recalls',
      name: 'recalls',
      component: loadPage('Recall')
    },
    {
      path: '/reactivation',
      name: 'reactivation',
      component: loadPage('Reactivation')
    },
    {
      path: '/postcards',
      name: 'postcards',
      component: loadPage('Card')
    },
    {
      path: '/scheduling',
      name: 'scheduling',
      component: loadPage('Scheduling')
    },
    {
      path: '/surveys',
      name: 'surveys',
      component: loadPage('Survey')
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
export default router
