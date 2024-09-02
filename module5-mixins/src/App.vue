<script>
import AppAlert from './components/AppAlert.vue'
import AppBlock from './components/AppBlock.vue'
import alertMixin from './components/alertMixin'

export default {
  mixins: [alertMixin],
  components: { AppAlert, AppBlock }
}
</script>

<template>
  <div class="h-screen bg-slate-400 pt-20">
    <AppAlert
      v-if="alert"
      title="Внимание!"
      text="Сообщение о предупреждении"
      type="bg-blue-300"
      closable
      @close="alert = false"
    />

    <div class="w-[800px] p-10 bg-white rounded-2xl m-auto mt-20">
      <button
        @click="toggleAlert"
        class="text-white bg-green-500 px-5 py-1 rounded-xl hover:bg-green-600"
      >
        {{ alert ? 'скрыть' : 'показать' }} сообщение
      </button>
    </div>
    <AppBlock />
  </div>
</template>


