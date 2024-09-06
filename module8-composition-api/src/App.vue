<script>

export default {

data() {
  return {
    name: 'VueJS',
    version: 3
  }
},
  methods: {
    changeInfo() {
      this.name = 'Vue JS !!!'
      this.version = 4
    }
  },
}
</script>

<template>
  <div class="h-screen bg-slate-400 pt-20">
    <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
      <h1 class="mb-2 text-2xl font-bold text-center">Vue Composition Api</h1>
      <hr class="mb-10"/>
      <p class="mb-5"> Название: <strong>{{ name }}</strong></p>
      <p class="mb-10">Версия: <strong>{{ version }}</strong></p>

      <button
      @click="changeInfo"
      class="border border-blue-600 text-white bg-blue-500 rounded-xl px-3 py-1 hover:bg-blue-400 mr-5 mb-10"
    >
      изменить
    </button>
  </div>
  </div>
</template>


