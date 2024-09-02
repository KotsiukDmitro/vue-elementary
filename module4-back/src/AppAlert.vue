<template>
  <div class="w-[400px] m-auto border-2 border-red-600 rounded-xl p-5 bg-white flex flex-col items-center mb-10" v-if="alert">
    <h1 class="text-red-500 text-2xl">{{ alert.title }}</h1>
    <p class="mb-5">{{ alert.content }}</p>
    <button
      class="border border-green-300 bg-green-300 px-5 rounded-xl text-white font-bold hover:bg-green-400"
      @click="$emit('close')"
      
    >
      закрыть
    </button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['alert']
}
</script>

<style scoped>
</style>