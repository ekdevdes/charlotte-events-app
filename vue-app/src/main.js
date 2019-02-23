
// External Libs
import Vue from 'vue'

// Internal Libs/Modules
import { store } from './store'
import { router } from './routes'

// Components
import App from './components/App.vue'

// Enable the Vue Performance tools only in development (https://goo.gl/AuwCq2)
Vue.config.performance = true;

new Vue({
  el: '#charlotte-events-app',
  store,
  router,
  render: h => h(App)
})
