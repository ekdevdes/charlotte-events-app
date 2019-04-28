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

export const store = new Vuex.Store({
    state: {
      events: [],
      loading: true
    },
    getters: {
      getEventList(state) {
        // If the event doesn't have a end time, then use the start date to see if the event passed, otherwise use the end date
        const hasEventPassed = (event) => {
          return event.date.end !== "" ?
              event.date.end.getTime() <= currentTime :
              event.date.start.getTime() <= currentTime
        }

        return {
          thisWeek: state.events.filter(event => event.date.start.getTime() >= currentTime && event.date.start.getTime() <= nextWeek),
          nextWeek: state.events.filter(event => (event.date.start.getTime() >= nextWeek && event.date.start.getTime() <= twoWeeks)),
          future: state.events.filter(event => (event.date.start.getTime() > twoWeeks)),
          past: state.events.filter(event => hasEventPassed(event))
        }
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
        // @TODO: add in Google Maps API parsing to event names to add in the lat and long for the places listed
        // to map them out on a map and maybe even give distance to place and directions links
          // if I do the directions links then I'll be able to remove the "google maps link" column in the sheet

        // @TODO Sort events by date from today to later on, perhaps include past events on a seperate tab/view

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
