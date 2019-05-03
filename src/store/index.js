// External Libs
import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'axios'

// Tell our Vue instance to use Vuex for app-specific data
Vue.use(Vuex)

import helpers from '../helpers'

const {
  currentTime,
  nextWeek,
  twoWeeks
} = helpers

const events = (state) => {
  return {
    thisWeek: state.events.filter(event => event.date.start.getTime() >= currentTime && event.date.start.getTime() <= nextWeek),
    nextWeek: state.events.filter(event => (event.date.start.getTime() >= nextWeek && event.date.start.getTime() <= twoWeeks))
  }
}

export const store = new Vuex.Store({
    state: {
      events: [],
      loading: true
    },
    getters: {
      getEventsByType(state) {
        return (type) => events(state)[type]
      },
      getLoadingState(state) {
        return state.loading
      }
    },
    mutations: {
      setEventsList(state, events) {
        Vue.set(state, 'events', events)
      },
      toggleLoading(state) {
        Vue.set(state, 'loading', !state.loading)
      }
    },
    actions: {
      getEvents({ commit }) {
        get('https://api.sheety.co/ce216392-6bb9-4b1f-8940-7d293edf62e4')
          .then(({ data }) => {
            const events = data.map(event => {
              const currentYear = new Date().getFullYear()
              const eventTimes = event.time.split('-')
              const eventStartDate = `${event.date} ${eventTimes[0]} ${currentYear}`
              const eventEndDate = `${event.date} ${eventTimes[1]} ${currentYear}`

              delete event.time

              return {
                ...event,
                date: {
                  start: new Date(Date.parse(eventStartDate)),
                  end: eventTimes.length === 1 ? '' : new Date(Date.parse(eventEndDate))
                }
              }
            })

            commit('setEventsList', events)
            commit('toggleLoading')
          }).catch(console.error)
      }
    }
})
