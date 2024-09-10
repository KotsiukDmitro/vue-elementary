<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import TemplateTask from '@/components/TemplateTask.vue'

const tasks = ref([])
const activeTasksNumber = computed(()=> tasks.value.filter(task => task.status === 'active').length)

async function getTasks() {
  const { data } = await axios.get(
    'https://list-tasks-731b7-default-rtdb.firebaseio.com/tasks.json'
  )

  const result = Object.keys(data).map((key) => {
    return {
      id: key,
      ...data[key]
    }
  })
  tasks.value = result

}

onMounted(() => {
  getTasks()
})
</script>

<template>
  <div class="w-[800px] m-auto">
    <h1 class="text-white font-bold text-3xl mb-10">Всего активных задач: {{ activeTasksNumber }}</h1>
    <TemplateTask v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>
