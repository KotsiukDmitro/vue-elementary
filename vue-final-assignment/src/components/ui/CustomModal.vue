<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div
      @click.stop.prevent="() => {}"
      class="bg-[#fff] p-5 rounded-lg m-auto border border-gray-600 w-[500px] fixed top-[20%] left-0 right-0"
    >
      <h3 v-if="title" class="text-center mb-5">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script setup>

defineEmits(['close'])
defineProps({
  title: {
    type: String
  }
})


</script>

<style scoped>
.modal-backdrop {
  min-height: calc(100vh + 50px);
  background-color: lightgrey;
  opacity: 95%;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
}
</style>