<script>
import AppAlert from './AppAlert.vue'
import alertMixin from './alertMixin'

export default {
  mixins: [alertMixin],
  components: { AppAlert }
}
</script>

<template>
  <AppAlert
    v-if="alert"
    title="Внимание!"
    text="Сообщение о предупреждении DANGER"
    type="bg-red-300"
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
</template>


