// External Libs
import Vue from 'vue'
import VueRouter from 'vue-router'

import EventsList from '../components/EventsList.vue'
import PlacesList from '../components/PlacesList.vue'

// Tell our Vue app to use Vue Router
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: EventsList
        },
        {
            path: '/places',
            component: PlacesList
        },
        {
            path: '/events',
            redirect: '/'
        }
    ]
})
