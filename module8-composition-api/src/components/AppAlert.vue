<template>
  <div
    class="border-2 border-blue-400 rounded-xl w-[500px] m-auto mt-10 text-center py-5 cursor-pointer"
    :class="type"
    @click="$emit('close')"
  >
    <h2 class="text-2xl font-semibold">{{ title }}</h2>

    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['title', 'type']
}
</script>

