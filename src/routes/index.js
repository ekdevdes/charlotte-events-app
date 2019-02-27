// External Libs
import Vue from 'vue'
import VueRouter from 'vue-router'

import Events from '../components/pages/Events.vue'
import Places from '../components/pages/Places.vue'

// Tell our Vue app to use Vue Router
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Events
        },
        {
            path: '/places',
            component: Places
        },
        {
            path: '/events',
            redirect: '/'
        }
    ]
})
