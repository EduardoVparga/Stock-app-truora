import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query"
import App from './App.vue'
import router from './router'
import './assets/main.css' 
import { Toaster } from 'vue-sonner'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.component('Toaster', Toaster)


app.mount('#app')