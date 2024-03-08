import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createHead } from '@unhead/vue'

const head = createHead();

createApp(App).use(head).mount('#app')
