<template>
  <AppAlert v-if="alert" title="Работаем с  Composition" type="bg-slate-200"  @close="close"/>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl mb-10 mt-10">
    <h1 class="mb-2 text-2xl font-bold text-center">Переиспользование</h1>
    <hr class="mb-10" />

    <button
      @click="toggle"
      class="border border-blue-600 text-white bg-blue-500 rounded-xl px-3 py-1 hover:bg-blue-400 mr-5 mb-10"
    >
      {{ alert ? 'закрыть' : 'показать' }} сообщение
    </button>

    <button
      @click="navigate"
      class="border border-green-600 text-white bg-green-500 rounded-xl px-3 py-1 hover:bg-green-400 mr-5 mb-10"
    >
      перейти на главную
    </button>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import AppAlert from '@/components/AppAlert.vue'
import { useAlert } from '@/composable/alert';

export default {
  setup() {
    const{alert, toggle, close} = useAlert()
    const router = useRouter()

    const navigate = () => router.push('/')


    return {
        alert, 
        navigate, 
        toggle, 
        close
    }
  },
  components: { AppAlert }
}
</script>
