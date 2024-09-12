<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <h1 class="mb-10 text-[30px] font-semibold text-center">Пользователи</h1>

    <p v-if="error" class="text-red-500" >{{ error }}</p>

    <Suspense v-else>
      <template #default>
        <UserList />
      </template>
      <template #fallback>
        <p>Loading ...</p>
      </template>     
    </Suspense>
  </div>
</template>



<script lang="ts" setup>
import UserList from '@/components/UserList.vue'
import { onErrorCaptured , ref} from 'vue';

const error = ref<null | unknown>(null)
onErrorCaptured(e => {
  error.value = e
  return true
})



</script>
