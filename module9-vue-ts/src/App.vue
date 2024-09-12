<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen bg-slate-300">
    <header class="flex px-10 py-2 items-center text-[20px] bg-blue-200 mb-20">
      <h3 class="mr-20">Vue + Typescript</h3>
      <ul class="flex gap-5">
        <li>
          <RouterLink to="/">главная</RouterLink>
        </li>
        <li>
          <RouterLink to="/users">пользователи</RouterLink>
        </li>
      </ul>
    </header>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
methods: {
  workWithStore() {
    this.$store.state
  }
},
})
</script>


<style lang="postcss">
.link-active{
  @apply text-blue-700 font-bold hover:text-red-500
}
</style>


