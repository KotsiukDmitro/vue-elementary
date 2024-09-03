import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import  alertMixin  from './components/alertMixin'
import translatePlugin from './components/translatePlugin'


const app = createApp(App)
// .mixin(alertMixin)

// .directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// })

const ua = {
    app: {
        title: 'Как работают плагины во VUE ?',
        changeBtn: 'Переключить язык'
    }
}

const en = {
    app: {
        title: 'How plugins work in VUE ?',
        changeBtn: 'Toggle language'
    }
}

app.use(translatePlugin, { ua, en })

app.mount('#app')
