import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
Vue.filter('currency', function (value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value)
})
