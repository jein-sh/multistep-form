import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg'

const app = createApp(App)

app.component('inline-svg', InlineSvg)
app.mount('#app')

