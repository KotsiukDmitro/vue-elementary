<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
    login() {
      this.isAuth = true
      this.$router.push('/dashboard')
    },
    logout() {
      this.isAuth = false
      this.$router.push('/login')
    }
  },
  components: { TheNavbar },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: '1', theme: 'Изучаю React' },
        { id: '2', theme: 'Изучаю Vue Router' },
        { id: '3', theme: 'Хочу выучить весь Vue' },
        { id: '4', theme: 'Хочу выучить Vuex' },
        { id: '5', theme: 'Хочу выучить Vue Hooks' }
      ]
    }
  }
}
</script>

<template>
  <TheNavbar :visible="isAuth" />
  <div class="h-screen bg-slate-400 pt-20">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


