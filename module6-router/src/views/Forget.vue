<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <h1 class="mb-10">Забыл пароль ?</h1>

    <button
      @click="goToLogin"
      class="border border-blue-600 text-white bg-blue-600 rounded-xl px-3 py-1 hover:bg-blue-400 mr-5 mb-10"
    >
      Вернуться к логину
    </button>
    <!-- <button
      @click="$router.push('/login')"
      class="border border-blue-600 text-white bg-blue-600 rounded-xl px-3 py-1 hover:bg-blue-400 mr-5 mb-10"
    >
      Вернуться к логину
    </button> -->

  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  },

}
</script>
