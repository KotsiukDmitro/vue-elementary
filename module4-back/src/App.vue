<script>
import PeopleList from './PeopleList.vue'
import AppAlert from './AppAlert.vue';
import AppLoader from './AppLoader.vue';
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      const response = await fetch(
        'https://vue-with-http-aaefe-default-rtdb.firebaseio.com/people.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.name
          })
        }
      )
      const firebaseData = await response.json()
      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })
      this.name = ''
    },
    async loadPeople() {
      try {
        this.loading = true
        const { data } = await axios.get(
          'https://vue-with-http-aaefe-default-rtdb.firebaseio.com/people.json'
        )
        if(!data) {
          throw new Error('Список пуст')
        }
        const result = Object.keys(data).map((key) => {
          return {
            id: key,
            // firstName: data[key].firstName
            ...data[key]
          }
        })
        this.people = result
        this.loading = false
      } catch (e) {
        this.alert = {
          title: 'Error',
          content: e.message,
        }
        this.loading = false
        console.log(e.message)
      }
    },
    async removePerson(id) {
      try {
        const name = this.people.find(p => p.id === id).firstName
        await axios.delete(
        `https://vue-with-http-aaefe-default-rtdb.firebaseio.com/people/${id}.json`
      )
      this.people = this.people.filter((person) => person.id !== id)
      this.alert = {
        title: 'Успешно',
        content: `Пользователь ${name} был удален`
      }
      } catch (error) {
        console.log('some text');
        
      }
      
    }
  },
  components: { PeopleList, AppAlert, AppLoader }
}
</script>

<template>
  <div class="bg-gray-400 min-h-screen pt-10">
    <AppAlert :alert="alert" @close="alert = null" />
    <form
      @submit.prevent="createPerson"
      class="w-[800px] m-auto border border-gray-500 rounded-xl p-10 bg-white"
    >
      <h2 class="text-center">Работа с базой данных</h2>

      <div class="flex flex-col mb-10">
        <label for="name" class="mb-2">введите имя</label>
        <input
          type="text"
          id="name"
          v-model.trim="name"
          class="border border-gray-600 rounded-md pl-5"
        />
      </div>

      <button
        :disabled="name.length === 0"
        class="border border-green-300 bg-green-300 px-5 rounded-xl text-gray-600 font-bold hover:bg-green-500"
        :class="{
          'hover:opacity-50 hover:bg-gray-300 bg-gray-300 border-gray-300': name.length === 0
        }"
      >
        Создать
      </button>
    </form>

<AppLoader v-if="loading" />

    <PeopleList v-else :people="people" @load="loadPeople" @remove="removePerson" />
  </div>
</template>
a
