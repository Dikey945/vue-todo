import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)


createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
