<script>
import TheNavbar from './TheNavbar.vue'


export default {
  components: {TheNavbar}

}

</script>

<template>
  <TheNavbar />
  <div class="h-screen bg-slate-400 pt-20">
      <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
        <h1 class="text-center font-bold text-[24px] mb-10">Про VUEX</h1>
        <h2 class="ml-10 font-semibold">Счётчик 0</h2>
    </div>
  </div>
</template>


