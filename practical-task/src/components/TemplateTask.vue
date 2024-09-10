<template>
  <div class="bg-white px-5 py-8 rounded-xl mb-5">
    <div class="mb-2 flex justify-between items-center">
      <h2 class="text-gray-600 text-2xl font-bold">{{ task.title }}</h2>
      <div class="border border-green-500 text-green-500 px-5 rounded-2xl"
      :class="{' border-red-500 text-red-500': task.status==='completed'}"
      >{{ task.status }}</div>
    </div>
    <hr class="mb-10" />
    <div class="mb-5">{{ task.date }}</div>
    <button
      @click="$router.push('/task-content/' + task.id)"
      class="border border-green-600 text-white bg-green-600 rounded-xl px-5 hover:bg-green-400"
    >
      view task ...
    </button>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object
  }
})
</script>
