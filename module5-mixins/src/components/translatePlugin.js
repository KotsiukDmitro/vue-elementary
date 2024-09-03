export default {
    install(app, options) {
        let current = 'ua'

        const changeLanguage = name => {
            current = name
        }

        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }

        app.config.globalProperties.$i18n = key => {
            return key.split('.').reduce((words, k) => {
                return words[k] || '=== UNKNOWN ==='
            }, options[current])
        }

        app.provide('language', changeLanguage)
    }
}