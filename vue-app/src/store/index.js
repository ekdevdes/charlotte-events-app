// External Libs
import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'axios'

// Tell our Vue instance to use Vuex for app-specific data
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      events: []
    },
    getters: {
      getEventList(state) {
        return state.events
      }
    },
    mutations: {
      setEventsList(state, events) {
        Vue.set(state, 'events', events)
      }
    },
    actions: {
      getEvents({ commit }) {
        // @TODO: add in Google Maps API parsing to event names to add in the lat and long for the places listed
        // to map them out on a map and maybe even give distance to place and directions links
          // if I do the directions links then I'll be able to remove the "google maps link" column in the sheet

        // @TODO Sort events by date from today to later on, perhaps include past events on a seperate tab/view

        get('https://api.sheety.co/ce216392-6bb9-4b1f-8940-7d293edf62e4')
          .then(({ data }) => commit('setEventsList', data))
      }
    }
})
