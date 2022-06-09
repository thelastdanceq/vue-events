import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEventView from '../views/CreateEventView.vue'
import CardDetails from '../components/CardDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/create-event',
    name: 'create-event',
    component: CreateEventView
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    props: true,
    children: [
      {
        path: '/events/:id',
        name: 'event-details',
        component: CardDetails,
        props: true,

      },
    ]

  },

  {
    path: '*',
    name: 'error',
    component: () => import('../views/404View.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
