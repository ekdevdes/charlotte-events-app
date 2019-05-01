// External Libs
import Vue from 'vue'
import VueRouter from 'vue-router'

import ThisWeek from '../components/pages/ThisWeek.vue'
import NextWeek from '../components/pages/NextWeek.vue'
import Favorites from '../components/pages/Favorites.vue'

// Tell our Vue app to use Vue Router
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
      {
          path: '/',
          component: ThisWeek,
          meta: {
            title: 'Happening This Week · Charlotte Events App'
          }
      },
      {
        path: '/next-week',
        component: NextWeek,
        meta: {
          title: 'Happening Next Week · Charlotte Events App'
        }
      },
      {
          path: '/favorites',
          component: Favorites,
          meta: {
            title: 'Favorites · Charlotte Events App'
          }
      },

      // 404 route
      {
        path: '*',
        component: ThisWeek
      },
    ]
})
