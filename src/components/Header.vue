<template>
    <header :class="`event-header event-header__container ${theme('event-header__container', eventType)} u-text-center`">
      <nav class="event-header event-header__nav">
        <router-link exact class="event-header event-header__nav-type" active-class="event-header__nav-type--current" to="/">This Week</router-link>
        <router-link exact class="event-header event-header__nav-type" active-class="event-header__nav-type--current" to="/favorites">Favorites</router-link>
        <router-link exact class="event-header event-header__nav-type" active-class="event-header__nav-type--current" to="/next-week">Next Week</router-link>
      </nav>
      <h1 class="event-header__title">
        <template v-if="eventType !== 'Favorites'">
          Happening <span>{{ eventType }}</span>
        </template>
        <template v-else>
          {{ eventType }}
        </template>
      </h1>
  </header>
</template>

<script>
  // Mixins
  import theme from '../mixins/theme'

  export default {
    props: {
      eventType: {
        type: String,
        required: true
      }
    },
    mixins: [
      theme
    ]
  }
</script>

<style lang="scss">
  /* Event Header */
  .event-header__container {
    background: var(--primary-tint-color);
    padding: 25px 30px 50px 30px;
    margin-bottom: 14px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 3;
  }

  .event-header__container--secondary {
    background: var(--secondary-tint-color);
  }

  .event-header__container--tertiary {
    background: var(--tertiary-tint-color);
  }

  .event-header__container::before {
    content: '';
    width: 100%;
    height: 30px;
    display: block;
    position: absolute;
    background: linear-gradient(to bottom, white 0%, white 50%, rgba(255, 255, 255, .1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, white), to(rgba(255, 255, 255, .1)));
    left: 0;
    bottom: -23px;
    z-index: 2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .event-header__container::after {
    content: '';
    width: 100%;
    height: 11px;
    background: white;
    display: block;
    position: absolute;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    bottom: 0;
    box-shadow: 1px -10px 5px rgba(113, 119, 135, 0.1);
  }

  .event-header__title {
    margin-bottom: 30px;
    font-size: 28px;
    color: white;
    margin: 0;
  }

  .event-header__title span {
    font-family: var(--font-avenir-heavy);
  }

  /** Event Header Nav **/
  .event-header__nav {
    margin-bottom: 20px;
  }

  .event-header__nav-type {
    color: white;
    text-decoration: none;
  }

  .event-header__nav-type:not(:last-child) {
    margin-right: 15px;
  }

  .event-header__nav-type--current {
    font-family: var(--font-avenir-heavy);
  }

  .event-header__category {
    font-family: var(--font-avenir-heavy);
    color: var(--tertiary-tint-color);
    margin-top: 35px;
    margin-bottom: 20px;
  }
  /** End Event Header Nav **/
  /* End Event Header */
</style>
