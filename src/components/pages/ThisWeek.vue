<template>
  <div class="event-time event-time__container">
    <Header eventType="This Week"></Header>

    <div class="event event__wrapper">
      <template v-if="events.length === 0">
        <div :class="`no-events no-events__container ${theme('no-events__container', 'Favorites')} u-center`">
          <p class="no-events no-events__header u-text-center">Nothing going on this week 🙃.</p>
        </div>
      </template>
      <template>
        <EventCard
          v-for="(event, i) in events"
          :key="i"
          :event="event"
          eventType="This Week">
        </EventCard>
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
    computed: {
      events() {
        return this.$store.getters.getEventsByType('thisWeek')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .no-events {
    &__header {
      font-family: var(--font-avenir-heavy);
      color: var(--primary-tint-color);
      margin-top: 55vh;
      margin-bottom: 20px;
    }
  }
</style>
