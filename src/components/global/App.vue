<template>
   <div class="charlotte-events-app">
       <router-view></router-view>
   </div>
</template>

<script>
    export default {
      mounted() {
        this.$store.dispatch('getEvents')
      },
      watch: {
        // Ensure the page title changes when the route changes
        $route(to, from) {
            document.title = to.meta.title || 'Happening This Week · Charlotte Events App';
        },
      }
    }
</script>

<style lang="scss">
  :root {
    --primary-tint-color: #4A90E2;
    --secondary-tint-color: #55D445;
    --tertiary-tint-color: #FFBE03;

    --font-avenir-heavy: 'Avenir-Heavy', Arial, Helvetica, sans-serif;
    --font-avenir-book: 'Avenir-Book', Arial, Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: var(--font-avenir-book);
  }

  /* Utility */
  .u-center {
    width: 92%;
    margin: 0 auto;
  }

  .u-text-center {
    text-align: center;
  }
  /* End Utility */
</style>
