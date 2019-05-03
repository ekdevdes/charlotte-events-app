<template>
  <div class="event-time event-time__container">
    <Header eventType="Favorites"></Header>

    <div class="event event__wrapper event__wrapper--tertiary">
      <template v-if="events.thisWeek.length === 0 && events.nextWeek.length === 0">
        <div :class="`no-events no-events__container ${theme('no-events__container', 'Favorites')} u-center`">
          <p class="no-events no-events__header u-text-center">No favorited events 🙃.</p>
        </div>
      </template>

      <template v-if="events.thisWeek.length > 0">
        <p class="event-header event-header__category u-center">This Week</p>
        <EventCard v-for="(event, i) in events.thisWeek" :key="`thisWeek${i}`" :event="event" eventType="This Week" eventTheme="Favorites"></EventCard>
      </template>

      <template v-if="events.nextWeek.length > 0">
        <p class="event-header event-header__category u-center">Next Week</p>
        <EventCard v-for="(event, i) in events.nextWeek" :key="`nextWeek${i}`" :event="event" eventType="Next Week" eventTheme="Favorites"></EventCard>
      </template>
    </div>
  </div>
</template>

<script>
  // Mixins
  import theme from '../../mixins/theme'

  export default {
    components: {
      EventCard: () => import('../EventCard.vue'),
      Header: () => import('../Header.vue')
    },
    mixins: [
      theme
    ],
    data() {
      return {
        events: {
          thisWeek: [],
          nextWeek: []
        }
      }
    },
    methods: {
      loadEvents() {
        const events = JSON.parse(localStorage.getItem('cltEventsApp')) || {}
        let thisWeeksEvents = events.thisWeek || []
        let nextWeeksEvents = events.nextWeek || []

        // The date comes from localStorage as a string but we're expecting a date object
        if(thisWeeksEvents.length > 0) {
          thisWeeksEvents = thisWeeksEvents.map(event => ({
            ...event,
            date: {
              start: new Date(event.date.start),
              end: new Date(event.date.end)
            }
          }))
        }

        // The date comes from localStorage as a string but we're expecting a date object
        if(nextWeeksEvents.length > 0) {
          nextWeeksEvents = nextWeeksEvents.map(event => ({
            ...event,
            date: {
              start: new Date(event.date.start),
              end: new Date(event.date.end)
            }
          }))
        }

        this.events = {
          thisWeek: [...thisWeeksEvents],
          nextWeek: [...nextWeeksEvents]
        }
      }
    },
    mounted() {
      // Change the background color of the html, body for webkit standalone mode to have a status bar background color
      [
        ...document.getElementsByTagName('body'),
        ...document.getElementsByTagName('html')
      ].forEach(el => el.style.background = 'var(--tertiary-tint-color)')

      // On initial load of this component load in the events
      this.loadEvents()

      // Whenever localStorage is updated update the events list
      window.addEventListener('storage', (e) => {
        this.loadEvents()
      })

      // Whenever the favorites button is toggled update the events list
      window.addEventListener('FavoriteToggled', (e) => {
        this.loadEvents()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .no-events {
    &__header {
      font-family: var(--font-avenir-heavy);
      color: var(--tertiary-tint-color);
      margin-bottom: 20px;
      padding-top: 40vh;
    }
  }

  .event {
    &__wrapper--tertiary {
      height: 100vh;
    }
  }
</style>
