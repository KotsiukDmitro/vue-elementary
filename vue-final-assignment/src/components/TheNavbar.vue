<template>
  <nav class="flex py-3">
    <h3 class="ml-5 font-semibold text-red-500">Online Bank</h3>
    <ul class="flex ml-auto">
      <li class="mr-5 hover:text-blue-600 hover:underline">
        <RouterLink to="/">Заявки</RouterLink>
      </li>
      <li class="mr-5 hover:text-blue-600 hover:underline">
        <RouterLink to="/help">Помощь</RouterLink>
      </li>
      <li class="mr-5 hover:text-blue-600 hover:underline">
        <a href="#">Сообщения</a>
      </li>
      <li class="mr-5 hover:text-blue-600 hover:underline">
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthUserStore } from '@/stores/auth-module';


const router = useRouter()
const store = useAuthUserStore()


const logout = () => {
  store.logout()
  router.push('/auth')
}
</script>

<style lang="postcss">
.nav-link--active {
  @apply text-blue-500
}
</style>
