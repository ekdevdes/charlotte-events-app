<template>
   <div>
       <router-view></router-view>
   </div>
</template>

<script>
    export default {
      mounted() {
        this.$store.dispatch('getEvents')
      }
    }
</script>

<style lang="scss">
    html,
    body {
        font-family: "Roboto", Helvetica, Arial, sans-serif;
    }
</style>
