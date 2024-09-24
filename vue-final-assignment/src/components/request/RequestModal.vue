<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col mb-6 relative">
      <label for="name" class="mb-1 ml-2 italic">ФИО</label>
      <input
        v-model="fio"
        @blur="fBlur"
        type="text"
        id="name"
        :class="['border px-5 rounded-md outline-none', { 'border-red-500': fError }]"
      />
      <small v-if="fError" class="absolute -bottom-4 left-1 text-red-500">{{ fError }}</small>
    </div>
    <div class="flex flex-col mb-6 relative">
      <label for="phone" class="mb-1 ml-2 italic">Телефон</label>
      <input
        v-model="phone"
        @blur="pBlur"
        type="text"
        id="phone"
        :class="['border px-5 rounded-md outline-none', { 'border-red-500': pError }]"
      />
      <small v-if="pError" class="absolute -bottom-4 left-1 text-red-500">{{ pError }}</small>
    </div>
    <div class="flex flex-col mb-6 relative">
      <label for="amount" class="mb-1 ml-2 italic">Сумма</label>
      <input
        v-model.number="amount"
        @blur="aBlur"
        type="number"
        id="amount"
        :class="['border px-5 rounded-md outline-none', { 'border-red-500': aError }]"
      />
      <small v-if="aError" class="absolute -bottom-4 left-1 text-red-500">{{ aError }}</small>
    </div>
    <div class="flex flex-col mb-6">
      <label for="status" class="mb-1 ml-2 italic">Статус</label>
      <select v-model="status" id="status" class="border px-5 rounded-md outline-none'">
        <option value="done">завершен</option>
        <option value="cancelled">отменен</option>
        <option value="active">активен</option>
        <option value="pending">выполняется</option>
      </select>
    </div>
    <button
      :disabled="isSubmitting"
      type="submit"
      class="border pb-2 pt-1 px-5 text-white text-[20px] bg-slate-400 rounded-3xl mt-5 disabled:opacity-50 hover:bg-slate-500"
    >
      Создать
    </button>
  </form>
</template>



<script setup>
import { useRequestForm } from '@/composable/request-form'
import { useRequestStore } from '@/stores/request-module';

const emit = defineEmits(['created'])
const store = useRequestStore()

const submit = async (values) => {
  await store.create(values)
    emit('created')   
}

const {
  status,
  isSubmitting,
  onSubmit,
  fio,
  fBlur,
  fError,
  phone,
  pBlur,
  pError,
  amount,
  aBlur,
  aError
} = useRequestForm(submit)

</script>
