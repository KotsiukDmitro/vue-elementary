<script>
import AppModal from './components/AppModal.vue'

export default {
  data() {
    return {
      isModal: false
    }
  },
  inject: ['language'],
  methods: {
    changeLang() {
      this.language('en')
      this.$forceUpdate()
    }
  },
  components: { AppModal }
}
</script>

<template>
  <div class="h-screen bg-slate-400 pt-20 relative">
    <div class="w-[800px] p-10 bg-white rounded-2xl m-auto mt-20">
      <h2 class="mb-3 text-center font-semibold text-2xl">Как работают плагины во VUE ?</h2>
      <hr class="mb-10" />

      <button
        @click="$alert('Wow It is working')"
        class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5 mb-5"
      >
        Вызвать Alert
      </button>

      <hr class="mb-10" />

      <h2 class="mb-3 text-center font-semibold text-2xl">
        {{ $i18n('app.title') }}
      </h2>
      <hr class="mb-10" />

      <button
        @click="changeLang"
        class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5 mb-5"
      >
        {{ $i18n('app.changeBtn') }}
      </button>

      <hr class="mb-10" />

      <button
        @click="isModal = true"
        class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5 mb-10"
      >
        открыть модалку
      </button>
      <Teleport to="body">
        <AppModal v-if="isModal" @close="isModal = false" />
      </Teleport>
    </div>
  </div>
</template>


