<template>
  <header v-if="visible" class="flex py-3">
    <h3 class="ml-5 font-semibold text-red-500">Gmail</h3>
    <ul class="flex ml-auto">
        <li class="mr-5 hover:text-blue-600 hover:underline"><router-link  to="/dashboard">Главная</router-link></li>
        <li class="mr-5 hover:text-blue-600 hover:underline" >
          <router-link to="/mail" custom v-slot="{navigate, href}">
            <a href="#" @click="navigate" :class="{'nav-link--active': $route.path.indexOf(href) !== -1}">Почта</a>
          </router-link></li>
        <li class="mr-5 hover:text-blue-600 hover:underline"><a href="#" @click.prevent="logout">Выйти</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject:['logout'],
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="postcss">
.nav-link--active {
  @apply underline text-green-500
}
</style>
