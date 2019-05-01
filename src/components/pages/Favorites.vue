<template>
  <div class="event-time event-time__container">
    <Header eventType="Favorites"></Header>

    <div class="event event__wrapper">
      <p class="event-header event-header__category u-center">This Week</p>


      <p class="event-header event-header__category u-center">Next Week</p>

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
        return [] // get events from localStorage
      }
    }
  }
</script>
