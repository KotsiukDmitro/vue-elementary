<script>
import TheNavbar from './TheNavbar.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {

  methods: {
    ...mapMutations({add: 'count/increment'}),
    ...mapActions('count', ['incrementAsync']),
    // add() {
    //   this.$store.commit('increment')
    //   альтернативная запись
    //   this.increment()
    // },
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 1000
    //   })
    // }
  },
  // computed: {
  //   ...mapGetters(['counter', 'doubleCounter', 'uppercaseTitle'])
  // },

  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['doubleCounter', 'counter'])
  },

  components: { TheNavbar }
}
</script>

<template>
  <TheNavbar />
  <div class="h-screen bg-slate-300 pt-20">
    <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
      <h1 class="text-center font-bold text-[24px] mb-3 text-green-600">{{ uppercaseTitle }}</h1>
      <hr class="mb-10" />
      <h2 class="ml-10 font-semibold mb-5">
        Счётчик:
        <span class="text-red-400 text-[24px] ml-3">
          <!-- {{ $store.state.counter }} -->
          <!-- {{ $store.getters.counter }} -->
          {{ counter }}
          <span class="ml-2 text-red-600">({{ doubleCounter }})</span>
        </span>
      </h2>
      <button @click="add" class="border border-green-600 text-green-600 px-5 pb-1 rounded-xl">
        добавить
      </button>
      <button
        @click="incrementAsync({value: 10, delay: 1000})"
        class="ml-5 border border-red-600 text-red-600 px-5 pb-1 rounded-xl"
      >
        добавить async
      </button>
    </div>
  </div>
</template>


