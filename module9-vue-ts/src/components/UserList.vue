<template>
  <ul>
    <li v-for="user in users">
        {{ user.id }}. {{ user.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { useUsers } from '@/composable/users'
import { defineComponent } from 'vue'

export default defineComponent({
  async setup() {
    const { users } = await useUsers()
    return {
      users
    }
  }
})
</script>

<style scoped>
</style>