<script>
export default {
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'border-red-500', 'border-red-700', 'border-green-500', 'primary'].includes(value)
      }
    }
  },
  methods: {
    btnLog() {
      console.log('Button log');
      
    }
  }
}
</script>

<template>
  <button class="border rounded-lg px-5 font-medium mt-5 mr-5" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>
