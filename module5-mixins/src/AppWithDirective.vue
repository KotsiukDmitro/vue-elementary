<script>
import focusDirective from './components/focusDirective'
import colorDirective from './components/colorDirective'

export default {
  data() {
    return {
      myColor: 'darkblue',
      type: 'color',
      show: true
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.show = false
  //   }, 5000)
  // },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

<template>
  <div class="h-screen bg-slate-400 pt-20">
    <div v-if="show" class="w-[800px] p-10 bg-white rounded-2xl m-auto mt-20">
      <h2 v-color:[type].blink.hover="myColor" class="mb-10 text-center font-semibold text-2xl">
        Кастомные директивы
      </h2>
      <div class="flex flex-col mb-5">
        <label for="name" class="mb-2">активный по умолчанию</label>
        <input v-focus type="text" id="name" class="border border-gray-500 pl-5 py-1" />
      </div>

      <button
        @click="myColor = 'darkred'"
        class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5"
      >
        Изменить цвет
      </button>
      <button
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
        class="border border-slate-400 text-white bg-slate-400 rounded-xl px-3 py-1 hover:bg-slate-600"
      >
        Переключить тип
      </button>
    </div>
  </div>
</template>


