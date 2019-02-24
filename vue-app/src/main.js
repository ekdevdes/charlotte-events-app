
// External Libs
import Vue from 'vue'

// Internal Libs/Modules
import { store } from './store'
import { router } from './routes'

// Components
import App from './components/App.vue'

import {
  MdCard,
  MdRipple,
  MdButton,
  MdProgress
} from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(MdCard)
Vue.use(MdRipple)
Vue.use(MdButton)
Vue.use(MdProgress)

// Enable the Vue Performance tools only in development (https://goo.gl/AuwCq2)
Vue.config.performance = true;

new Vue({
  el: '#charlotte-events-app',
  store,
  router,
  render: h => h(App)
})
