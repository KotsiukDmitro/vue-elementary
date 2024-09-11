<template>
  <div class="w-[800px] m-auto">
    <form @submit.prevent="createTask" class="bg-white px-5 py-8 rounded-xl">
      <h2 class="text-3xl font-semibold text-blue-800 mb-10 ml-3">Create new task</h2>
      <div class="flex flex-col mb-10 relative">
        <label for="name" class="ml-2 font-bold text-xl">Title</label>
        <input
          v-model.trim="name"
          type="text"
          id="name"
          class="border outline-none pl-3 py-1 rounded-lg"
          placeholder="task name"
          :class="{
            'border-red-500': errors.name
          }"
          
        />
        <span v-if="errors" class="text-red-500 absolute bottom-[-25px] left-3">{{ errors.name }}</span>
      </div>
      
      <div class="flex flex-col mb-10">
        <label for="date" class="ml-2 font-bold text-xl">Date deadline</label>
        <input
          v-model="date"
          type="date"
          id="data"
          class="border outline-none px-3 py-1 rounded-lg"
          required
        />
      </div>
      <div class="flex flex-col mb-10 relative">
        <label class="ml-2 font-bold text-xl">Description</label>
        <textarea
          v-model.trim="description"
          class="border outline-none pl-3 py-1 rounded-lg"
          placeholder="short description"
          :class="{
            'border-red-500': errors.name
          }"
        ></textarea>
        <span v-if="errors" class="text-red-500 absolute bottom-[-25px] left-3">{{ errors.description }}</span>
      </div>
      <div class="ml-5">
        <button
        :class="{'opacity-20': name.length === 0 || description.length === 0}"
        type="submit"
        class="border border-gray-500 text-white bg-gray-500 rounded-2xl px-5 py-1 hover:bg-gray-600"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script >
import { reactive, ref} from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
//https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks.json
export default {
  setup() {
    const name = ref('')
    const date = ref(null)
    const description = ref('')
    const status = ref('active')
    const errors = reactive({
      name: '',
      description: ''
    })
    // const listTasks = ref([])
    const router = useRouter()
    const navigate = () => router.push('/')

    function formIsValid() {
      let isValid = true
      if (name.value.length < 1) {
        errors.name = 'required field'
        isValid = false
      }
      if (description.value.length < 5) {
        errors.description = 'required field (min 5 symbol)'
        isValid = false
      }
      return isValid
    }

    async function createTask() {
    
     
      // listTasks.push({
      //   title: name.value,
      //   date: date,
      //   description: description.value,
      //   id: response.data.name
      // })

      // name.value = ''
      // date.value = null
      // description.value = ''

      if (formIsValid()) {
        const response = await axios.post('https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks.json', {
          title: name.value,
          date: date.value,
          description: description.value,
          status: status.value
      })
        alert('task added')
        navigate()
      }
      return
    }
   

    return {
      name,
      date,
      description,
      errors,
      formIsValid,
      createTask,

    }
  }
}
</script>
