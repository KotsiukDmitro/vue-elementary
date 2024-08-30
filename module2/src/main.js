import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader.vue'

const app = createApp(App)

//global
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(() => {
    return import('./components/AsyncComponent.vue')
}))

app.mount('#app')
