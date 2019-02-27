<template>
  <md-card md-with-hover class="md-accent md-elevation-3">
    <md-card-header>
      <h1 class="md-title event-view__event-title">{{ event.eventName }}</h1>
      <h2 class="md-subhead event-view__event-location">{{ event.location }} &middot; {{ event.price }}</h2>
      <p class="md-subhead even-view__event-days">{{ getEventDays(event) }} &middot; <strong>{{ getEventTime(event) }}</strong></p>
    </md-card-header>
    <md-card-content v-if="event.description !== '-' || event.description === ''">
      <p class="event-view__event-desc" v-html="event.description"></p>
    </md-card-content>
    <md-card-actions>
      <md-button :href="event.moreInfo" class="event-view__event-action">More Details</md-button>
      <md-button :href="event.googleMapsLink" class="event-view__event-action">Directions</md-button>
      <md-button v-if="event.whereToBuyTickets !== '-'" :href="event.whereToBuyTickets" class="event-view__event-action">Buy Tickets</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  import helpers from '../helpers'

  export default {
    props: ['event'],
    methods: {
      suffix(number) {
        return helpers.ordinalSuffix(number)
      },
      getEventDays(event) {
        return helpers.outputDateRange(event.date.start, event.date.end, true)
      },
      getEventTime(event) {
        if(event.date.end === '') {
          return event.date.start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        } else {
          return `${event.date.start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} -
          ${event.date.end.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
        }
      }
    }
  }
</script>

<style lang="scss">
  .event-view {
    &__event {
      margin-bottom: 20px;
    }
  }
</style>
