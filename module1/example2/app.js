const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderText: 'Введите текст',
            inputValue: '',
            notes: []

        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCaseWord (item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        },

    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(this.inputValue.length > 10) {
                this.inputValue = ''
            }
        }
    }

}


Vue.createApp(App).mount('#app2')

