<template>
  <div v-if="task" class="bg-white px-5 py-8 rounded-xl w-[800px] m-auto">
    <h2 class="text-gray-600 text-2xl font-bold">{{ task.title }}</h2>
    <hr class="mb-10" />
    <div class="mb-5">
      Status:
      <span class="ml-1 text-green-500" :class="{ 'text-red-500': task.status === 'completed' }">{{
        task.status
      }}</span>
    </div>
    <div class="mb-5">
      Data deadline: <span>{{ task.date }}</span>
    </div>
    <div class="mb-5">
      Description: <span>{{ task.description }}</span>
    </div>
    <div class="flex">
      <button
        @click="changeStatus('in working')"
        :disabled="task.status === 'in working'"
        class="border border-green-600 text-green-600 bg-white rounded-xl px-5 hover:bg-green-500 hover:text-white mr-5 disabled:opacity-30"
      >
        in working
      </button>
      <button
        @click="changeStatus('completed')"
        :disabled="task.status === 'completed'"
        class="border border-red-500 text-red-500 bg-white rounded-xl px-5 hover:bg-red-600 hover:text-white mr-5 disabled:opacity-30"
      >
        completed
      </button>
      <button
        @click="removeTask"
        class="border border-red-500 text-white bg-red-500 rounded-xl px-5 hover:bg-red-600"
      >
        remove task
      </button>
    </div>
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NotFound from '@/views/NotFound.vue'

const task = ref([])
const route = useRoute()
const idTask = route.params.id
const router = useRouter()
const navigate = () => router.push('/')

async function getTask() {
  const { data } = await axios.get(
    `https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks/${idTask}.json`
  )
  task.value = data
}

async function removeTask() {
  await axios.delete(`https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks/${idTask}.json`)

  alert('delete task ???')
  navigate()
}

async function changeStatus(status) {
  const { data } = await axios.put(
    `https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks/${idTask}.json`,
    {
      ...task.value,
      status: status
    }
  )
  task.value = data
}

onMounted(() => {
  getTask()
})
</script>
