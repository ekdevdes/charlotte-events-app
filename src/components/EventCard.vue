<template>
  <div :class="`event event__container ${theme('event__container', eventType)} u-center`">
    <a href="#" class="event event__action event__action--favorite" @click.prevent="toggleFavorite(event)">
      <template v-if="isFavorited">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path id="icon" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/>
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path id="icon" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
        </svg>
      </template>
    </a>

    <header class="event event__header">
      <h1 class="event event__title">{{ event.eventName }}</h1>
      <h2 class="event event__location">{{ event.location }} &middot; <span>{{ event.price }}</span></h2>
      <h3 class="event event__date">{{ eventDate }} &middot; <span>{{ eventTime }}</span></h3>
    </header>

    <p class="event__description">{{ event.description }}</p>

    <div class="event event__actions">
      <div class="event event__cta-container" v-if="event.price !== 'Free'">
        <a :href="event.whereToBuyTickets" target="_blank" class="event event__cta">Get Tickets</a>
      </div>
      <a :href="event.moreInfo" target="_blank" class="event event__action">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M-2-2h24v24H-2z"/>
            <path id="icon" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8H9V5h2v2z" fill-rule="nonzero"/>
          </g>
        </svg>
      </a>

      <a :href="event.googleMapsLink" target="_blank" class="event event__action">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M-2-2h24v24H-2z" />
            <path id="icon" d="M19.71 9.29l-9-9a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 0 0 0-1.41zM12 12.5V10H8v2c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1h5V5.5l3.15 3.15c.2.2.2.51 0 .71L12 12.5z" fill-rule="nonzero" />
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  // Mixins
  import theme from '../mixins/theme'

  // Helpers
  import helpers from '../helpers'

  export default {
    props: {
      eventType: {
        type: String,
        required: true
      },
      event: {
        type: Object,
        required: true
      }
    },
    mixins: [
      theme
    ],
    data() {
      return {
        isFavorited: false
      }
    },
    computed: {
      eventDate() {
        return helpers.outputDateRange(this.event.date.start, this.event.date.end, true)
      },
      eventTime() {
        if(this.event.date.end === '') {
          return this.event.date.start.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })
        } else {
          return `${this.event.date.start.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
            })} -
          ${this.event.date.end.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}`
        }
      }
    },
    methods: {
      toggleFavorite(event) {
        const events = JSON.parse(localStorage.getItem('cltEventsApp')) || {}
        const thisWeeksEvents = events.thisWeek || []

        const isEventSaved = thisWeeksEvents.find(aEvent => aEvent.title === event.title)

        if(isEventSaved) {
          // remove events from the store if they clicked the favorite button and the event already exists in localStorage
        } else {
          // add the event, it must not exist already

          localStorage.setItem('cltEventsApp', JSON.stringify({
            thisWeek: [
              ...events.thisWeek,
              event
            ],
            nextWeek: [
              ...events.nextWeek
            ]
          }))
        }

        this.isFavorited = !this.isFavorited
      }
    }
  }
</script>

<style lang="scss">
  .event__wrapper {
    margin-top: 155px;
  }

  .event__container {
    background: white;
    padding: 20px 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(113, 119, 135, 0.3);
    padding: 20px;
    border-left: 3px solid var(--primary-tint-color);
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
  }

  .event__container--secondary {
    border-left: 3px solid var(--secondary-tint-color);
  }

  .event__container--tertiary {
    border-left: 3px solid var(--tertiary-tint-color);
  }

  .event__title {
    font-size: 20px;
    font-family: 'Avenir-Heavy', Arial, Helvetica, sans-serif;
    padding-bottom: 3px;
    color: var(--primary-tint-color);
    width: 97%;
  }

  .event__container--secondary .event__title,
  .event__container--secondary .event__location span,
  .event__container--secondary .event__date span {
    color: var(--secondary-tint-color);
  }

  .event__container--tertiary .event__title,
  .event__container--tertiary .event__location span,
  .event__container--tertiary .event__date span {
    color: var(--tertiary-tint-color);
  }

  .event__location,
  .event__date,
  .event__description {
    font-size: 14px;
    line-height: 1.4;
  }

  .event__title,
  .event__location,
  .event__date {
    margin-top: 0;
    margin-bottom: 0;
  }

  .event__location,
  .event__date {
    font-weight: normal;
  }

  .event__location span,
  .event__date span {
    font-family: 'Avenir-Heavy', Arial, Helvetica, sans-serif;
    color: var(--primary-tint-color);
  }

  .event__header {
    margin-bottom: 15px;
  }

  .event__actions {
    margin-top: 20px;
    text-align: right;
  }

  .event__action {
    text-decoration: none;
  }

  .event__action--favorite {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .event__action svg #icon {
    fill: var(--primary-tint-color);
  }

  .event__container--secondary .event__action svg #icon {
    fill: var(--secondary-tint-color);
  }

  .event__container--tertiary .event__action svg #icon {
    fill: var(--tertiary-tint-color);
  }

  .event__action:not(:last-child) {
    margin-right: 15px;
  }

  .event__cta-container {
    float: left;
  }

  .event__cta {
    font-family: 'Avenir-Heavy', Arial, Helvetica, sans-serif;
    text-decoration: none;
    position: relative;
    top: 2px;
    color: var(--primary-tint-color);
  }

  .event__container--secondary .event__cta {
    color: var(--secondary-tint-color);
  }

  .event__container--tertiary .event__cta {
    color: var(--tertiary-tint-color);
  }
  /* End Event Card */
</style>
