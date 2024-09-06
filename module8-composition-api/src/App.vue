

<template>
  <header class="px-5 py-2 flex">
    <strong class="text-blue-400">Vue Composition Api</strong>
    <ul class="flex ml-20 gap-5">
      <li><router-link to="/" class=" underline hover:text-blue-400">Главная</router-link></li>
      <li><router-link to="/reusable" class="underline hover:text-blue-400">Переиспользование</router-link></li>
      <li><router-link to="/vuex" class="underline hover:text-blue-400">Vuex</router-link></li>
    </ul>
  </header>
  <div class="h-screen bg-slate-400 pt-20">
    
      <router-view></router-view>  

  </div>
</template>

<style lang="postcss">
.active{
  @apply font-semibold text-blue-300 no-underline
}
</style>


