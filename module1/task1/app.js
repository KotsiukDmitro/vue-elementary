const App = {
    data() {
        return {
            title: 'План по изучению Vue.js',
            items: [
                {
                    id: 1,
                    name: 'Основы',
                    content: 'Основы'
                },
                {
                    id: 2,
                    name: 'Компоненты',
                    content: 'Компоненты'
                },
                {
                    id: 3,
                    name: 'Роутер',
                    content: 'Роутер'
                },
                {
                    id: 4,
                    name: 'Vuex',
                    content: 'Vuex'
                },
                {
                    id: 5,
                    name: 'Composition',
                    content: 'Composition'
                }
            ]
        }
    }

}

Vue.createApp(App).mount('#task1')