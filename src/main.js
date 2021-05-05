import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes,faCheck,faDownload,faInfoCircle,faHeadSideMask } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCalendar} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTimes,faCheck,faCalendar,faDownload,faEnvelope,faInfoCircle,faHeadSideMask)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
