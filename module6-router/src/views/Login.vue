<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    isValid() {
      return this.email !== '' && this.password !== ''
    }
  },
  inject:['login'],
  methods: {
    submit() {
      if (this.isValid) {
        // this.$router.push('/dashboard') сохраняет в истории переходы, а replace нет
        // this.$router.replace('/dashboard')
        this.login()
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <h2 class="text-center font-bold text-2xl text-blue-500 mb-5">Мини клон Gmail</h2>

    <div class="flex flex-col mb-6">
      <label for="email" class="mb-1 italic ml-3">Email</label>
      <input v-model.trim="email" type="text" id="email" class="border px-5 rounded-md" />
    </div>

    <div class="flex flex-col mb-6">
      <label for="password" class="mb-1 italic ml-3">Пароль</label>
      <input v-model="password" type="password" id="password" class="border px-5 rounded-md" />
    </div>

    <div class="flex justify-between">
      <button
        class="border border-green-600 text-white bg-green-600 rounded-xl px-3 py-1 hover:bg-green-400 ml-5 mb-10"
      >
        Войти
      </button>

      <router-link to="/forget">
        <button
          class="border border-red-600 text-white bg-red-600 rounded-xl px-3 py-1 hover:bg-red-400 mr-5 mb-10"
        >
          Забыл пароль ?
        </button>
      </router-link>
    </div>
  </form>
</template>
