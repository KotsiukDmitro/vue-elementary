

<template>
<div class="bg-white p-5 m-auto w-[800px] rounded-xl">
  <h1 class="mb-10 text-[30px] font-semibold">{{ title }}</h1>

  <button
  @click="navigate"
        class="border-2 border-green-600 text-green-600 bg-white rounded-xl px-3 py-1 hover:bg-green-400 hover:text-white"
      >
      Открыть пользователей
      </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
setup() {
  const router = useRouter()
  const navigate = ():void => {
    router.push('/users')
  }
  return {
    title: 'Как работает Vue с TypeScript ?',
    navigate
  }
}
})
</script>

