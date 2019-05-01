<template>
  <div class="event-time event-time__container">
    <Header eventType="This Week"></Header>

    <div class="event event__wrapper">
      <EventCard
        v-for="(event, i) in events"
        :key="i"
        :event="event"
        eventType="This Week">
      </EventCard>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      EventCard: () => import('../EventCard.vue'),
      Header: () => import('../Header.vue')
    },
    computed: {
      events() {
        return this.$store.getters.getEventsByType('thisWeek')
      }
    }
  }
</script>
