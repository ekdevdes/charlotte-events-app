<template>
  <div class="event-view">
    <div class="row">
      <div class="col-xs-12 event-view__header-wrapper">
        <h1 class="event-view__header">
          <span>Upcoming Events</span><br> This Week
        </h1>
        <h3 class="event-view__subhead">
          {{ outputDateRange(dates.current, dates.nextWeek) }}
        </h3>
      </div>
    </div>

    <div class="row collapse event-view__event-list">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" :md-stroke="3" :md-diameter="40" v-if="loading"></md-progress-spinner>
      <div class="col-xs-12 event-view__event" v-for="(event, i) in events.thisWeek" :key="i" v-else>
        <EventCard :event="event"></EventCard>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 event-view__header-wrapper">
        <h1 class="event-view__header">
          <span>Upcoming Events</span><br> Next Week
        </h1>
        <h3 class="event-view__subhead">
          {{ outputDateRange(dates.nextWeek, dates.twoWeeks) }}
        </h3>
      </div>
    </div>

    <div class="row collapse event-view__event-list">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" :md-stroke="3" :md-diameter="40" v-if="loading"></md-progress-spinner>
      <div class="col-xs-12 event-view__event" v-for="(event, i) in events.nextWeek" :key="i" v-else>
        <EventCard :event="event"></EventCard>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 event-view__header-wrapper">
        <h1 class="event-view__header">
          <span>Other</span><br> Upcoming Events
        </h1>
        <h3 class="event-view__subhead">
          Starting on or after {{ twoWeekMonthName }} {{ suffix(dates.twoWeeks.getDate()) }}
        </h3>
      </div>
    </div>

    <div class="row collapse event-view__event-list">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" :md-stroke="3" :md-diameter="40" v-if="loading"></md-progress-spinner>
      <div class="col-xs-12 event-view__event" v-for="(event, i) in events.future" :key="i" v-else>
        <EventCard :event="event"></EventCard>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 event-view__header-wrapper">
        <h1 class="event-view__header">
          <span>Past</span><br> Events
        </h1>
        <h3 class="event-view__subhead">
          Happened before {{ currentMonthName }} {{ suffix(dates.current.getDate()) }}
        </h3>
      </div>
    </div>

    <div class="row collapse event-view__event-list">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" :md-stroke="3" :md-diameter="40" v-if="loading"></md-progress-spinner>
      <div class="col-xs-12 event-view__event" v-for="(event, i) in events.past" :key="i" v-else>
        <EventCard :event="event"></EventCard>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import helpers from '../../helpers'

  import EventCard from '../EventCard.vue'

  export default {
    components: {
      EventCard
    },
    computed: {
      ...mapGetters({
        events: 'getEventList',
        loading: 'getLoadingState'
      }),
      dates() {
        return {
          current: new Date(helpers.currentTime),
          nextWeek: new Date(helpers.nextWeek),
          twoWeeks: new Date(helpers.twoWeeks)
        }
      },
      currentMonthName() {
        return this.dates.current.toLocaleString('en-us', { month: 'long' })
      },
      twoWeekMonthName() {
        return this.dates.twoWeeks.toLocaleString('en-us', { month: 'long' })
      }
    },
    methods: {
      suffix(number) {
        return helpers.ordinalSuffix(number)
      },
      outputDateRange(startDate, endDate) {
        return helpers.outputDateRange(startDate, endDate)
      }
    }
  }
</script>

<style lang="scss">
  .event-view {
    padding: 0 15px;

    &__header {
      font-size: 40px;
      font-weight: 500;
      line-height: 1.3;
      margin-bottom: 0;
      color: white;

      span {
        font-weight: 400;
      }
    }

    &__header-wrapper {
      margin: 15px 0 30px;
      color: white;
    }

    &__subhead {
      font-size: 20px;
      font-weight: 400;
      margin-top: 10px;
    }
  }
</style>
