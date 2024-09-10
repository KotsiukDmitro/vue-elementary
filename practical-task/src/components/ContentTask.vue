<template>
  <div class="bg-white px-5 py-8 rounded-xl w-[800px] m-auto">
    <h2 class="text-gray-600 text-2xl font-bold">{{ task.title }}</h2>
    <hr class="mb-10" />
    <div class="mb-5">Status: <span class="ml-1 text-green-500">Status</span></div>
    <div class="mb-5">Data deadline: <span>{{ task.date }}</span></div>
    <div class="mb-5">Description: <span>{{ task.description }}</span></div>
    <div class="flex">
      <button
        class="border border-green-600 text-green-600 bg-white rounded-xl px-5 hover:bg-green-500 hover:text-white mr-5"
      >
        active
      </button>
      <button class="border border-red-500 text-white bg-red-500 rounded-xl px-5 hover:bg-red-600">
        completed
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const task = ref([])
const route = useRoute()
const idTask = route.params.id

async function getTask() {
  const { data } = await axios.get(
    'https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks.json'
  )
  task.value = data[idTask]
}

onMounted(() => {
  getTask()
})
</script>
