import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import DefaultLayout from '@/views/layouts/page/index.vue'

loadFonts()

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
