import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import { createI18n } from 'vue-i18n'
import enAU from './locales/en-AU.json'
import zhCN from './locales/zh-CN.json'

type MessageSchema = typeof enAU

const i18n = createI18n<[MessageSchema], 'en-AU' | 'zh-CN'>({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'en-AU': enAU,
    'zh-CN': zhCN
  }
})

const app = createApp(App)

app.use(createPinia()).use(router).use(i18n).use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

app.mount('#app')
