<template>
  <div
    class="border-2 border-blue-400 rounded-xl w-[500px] m-auto mt-10 text-center py-5"
    :class="type"
  >
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <p class="mb-5">{{ text }}</p>
    <button
      v-if="closable"
      @click="$emit('close')"
      class="border border-green-500 text-white px-5 py-1 rounded-xl hover:bg-green-500"
      :class="type"
    >
      закрыть
    </button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: String,
    text: String,
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'bg-blue-300',
      validator(val) {
        return ['bg-blue-300', 'bg-red-300', 'bg-green-300'].includes(val)
      }
    }
  },

}
</script>

<style scoped>
</style>