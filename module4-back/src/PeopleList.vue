<template>
  <div v-if="people.length !== 0">
    <div
      v-for="person in people"
      :key="person.id"
      class="w-[800px] m-auto border border-gray-500 rounded-xl p-5 bg-white flex justify-between items-center"
    >
      <h3>{{ person.firstName }}</h3>
      <button @click="$emit('remove', person.id)" class="border px-3 bg-red-500 rounded-lg text-white">удалить</button>
    </div>
  </div>
  <div v-else class="w-[800px] m-auto border border-gray-500 rounded-xl p-10 bg-white">
    <h4 class="text-center text-red-600 mb-5">Список пока пуст !!!</h4>
    <button
      @click="$emit('load')"
      class="border border-blue-300 bg-blue-300 px-5 rounded-xl text-blue-600 font-bold hover:bg-blue-400"
    >
      Загрузить список
    </button>
  </div>
</template>

<script>
export default {
  emits: ['load', 'remove'],
  props: ['people']
}
</script>
