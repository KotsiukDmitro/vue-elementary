const h = Vue.h


const App = Vue.createApp({
    data() {
        return {
            title: 'Это из свойства template'
        }
    },

    methods: {
        changeTitle() {
            this.title = 'Изменили !!!'
        }
    },

    // template: `
    //     <div>
    //        <h1>{{title}}</h1>
    //        <button @click="title = 'Новый заголовок'">Изменить</button>
    //     </div>  
    // `

    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'Изменить')
        ])
    },
                            // Lifecycle Hooks
    beforeCreate() {
        console.log('beforeCreate')
    },
    create() {
        console.log('create')
    },
    beforeMount() {
        console.log('beforeMount')       
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount(){ 
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },

})

App.mount('#app4')

Vue.createApp({
    data() {
        return {
            title: 'New Title 2'
        }
    }
}).mount('#app4_1')

// setTimeout(() => {
// App.unmount()
// }, 2000)


let title = 'Vue 3'
let message = 'Контент' + title

const data = {
    title: 'Vue 3',
    massage: 'Контент'
}

const proxy = new Proxy(data, {
    // get(target, p) {
    //     console.log(target);
    //     console.log(p);
    // },
    // set(target, key, value) {
    //     console.log(target);
    //     console.log(key);
    //     console.log(value);
    // },
    set(target, key, value) {
        if (key === 'title') {
            target.message = 'Контент' + value
        }
        target[key] = value
    }
})

proxy.title = 'React'
// console.log(proxy);
