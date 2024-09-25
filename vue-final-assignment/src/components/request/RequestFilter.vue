<template>
  <div class="flex mb-10">
    <div >
      <input v-model="name" type="text" placeholder="сортировать по имени" class="border px-3 rounded-md outline-none mr-10" />
    </div>
    <div >
      <select v-model="status" class="border px-3 rounded-md outline-none mr-5">
        <option disabled selected >сортировать по статусу </option>
        <option value="done">завершен</option>
        <option value="cancelled">отменен</option>
        <option value="active">активен</option>
        <option value="pending">выполняется</option>
      </select>
    </div>
    <button v-if="isActive" @click="reset" class="border px-2 rounded-xl">Сброс фильтров</button>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue'])
defineProps(['modelValue'])

const name = ref()
const status =ref()

watch([name, status], values => {
    emit('update:modelValue', {
        name: values[0],
        status: values[1]
    })
})

const isActive = computed(()=> name.value || status.value)

function reset() {
    name.value = ''
    status.value = null
}

</script>
