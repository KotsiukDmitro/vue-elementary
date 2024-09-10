<template>
  <div class="bg-blue-200 pl-20 py-3">
    <ul class="flex">
      <li class="mr-10"><RouterLink to="/" class="hover:underline hover:text-red-500">All tasks</RouterLink></li>
      <li><RouterLink to="/new-task" class="hover:underline hover:text-red-500">Create task</RouterLink></li>
    </ul>
   
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
.nav-link--active {
  @apply uppercase underline text-blue-500 font-semibold hover:text-blue-500
}
</style>

