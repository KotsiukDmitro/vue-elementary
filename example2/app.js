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
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
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
        }
    }

}


Vue.createApp(App).mount('#app')

