<template>
  <form @submit.prevent="onSubmit" class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <h1 class="text-center font-semibold text-2xl mb-10">Войти в систему</h1>
    <div class="flex flex-col mb-6 relative">
      <label for="email" class="mb-1 ml-2 italic">Email</label>
      <input
        @blur="eBlur"
        v-model="email"
        type="email"
        id="email"
        :class="['border px-5 rounded-md outline-none', { 'border-red-500': eError }]"
      />
      <small v-if="eError" class="absolute -bottom-4 left-1 text-red-500">{{ eError }}</small>
    </div>
    <div class="flex flex-col mb-6 relative">
      <label for="password" class="mb-1 ml-2 italic">Пароль</label>
      <input
        @blur="pBlur"
        v-model="password"
        type="password"
        id="password"
        :class="['border px-5 rounded-md outline-none', { 'border-red-500': pError }]"
      />
      <small v-if="pError" class="absolute -bottom-4 left-1 text-red-500">{{ pError }}</small>
    </div>
    <button
      :disabled="isSubmitting || isTooManyAttempts"
      type="submit"
      class="border pb-2 pt-1 px-5 text-white text-[20px] bg-slate-500 rounded-3xl mt-5 disabled:opacity-50"
    >
      войти
    </button>

    <div v-if="isTooManyAttempts" class="text-red-500">Слишком много попыток для входа</div>
  </form>
</template>

<script setup>
import { useLoginForm } from '@/composable/login-form'


const { email, password, eError, pError, eBlur, pBlur, onSubmit, isSubmitting, isTooManyAttempts } =
  useLoginForm()
</script>
