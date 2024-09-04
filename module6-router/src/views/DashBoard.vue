<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <h1 class="mb-5 text-2xl font-bold text-center">Привет на главной !!!</h1>
    <p class="mb-10">тут ты можешь перейти на любую страницу и просмотреть письма :)</p>

    <router-link :to="{name: 'email'}" class="text-blue-400 hover:underline">В почту !</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
    console.log('beforeRouteEnter'); 
  },

  beforeRouteLeave(to, from, next) {
    const answer = confirm('Уверены, что хотите перейти ???')
    if(answer) {
      next()
    }else{
      next(false)
    }
  }

}
</script>
