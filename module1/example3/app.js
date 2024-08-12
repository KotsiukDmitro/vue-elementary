Vue.createApp({

    // data() {
    //     return {

    //     }
    // }

    data: () => ({
        title: 'Заголовок',
        myHtml: '<h1>Vue 3 App</h1>',
        person: {
            firstName: 'Dmitro',
            lastName: 'Kotsiuk',
            age: 38
        },
        items: [1, 2, 3, 4]
    }),

    methods: {
        addItem() {
             this.items.unshift(this.$refs.myInput.value)
             this.$refs.myInput.value = ''
         },
         remove(index) {
            this.items.splice(index, 1)
         },
         log(item) {
            console.log('Log item: ', item);
            
         }
    },

    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }


}).mount('#app3')