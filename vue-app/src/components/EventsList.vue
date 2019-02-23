<template>
    <h1>Events List</h1>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        events: 'getEventsList'
      })
    }
  }
</script>

<style lang="scss">
    html,
    body {
        font-family: Helvetica, Arial, sans-serif;
    }
</style>
