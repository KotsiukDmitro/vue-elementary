<template>
  <div v-if="email">
    <h2 class="mb-5 font-semibold text-[24px]">{{ email.theme }}</h2>
    <p class="mb-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam unde ducimus
      deleniti harum, sed officia incidunt aut id commodi placeat? Odio natus repellendus non
      officia perspiciatis quis assumenda error?
    </p>
    <button
    @click="$router.push('/mail')"
      class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5 mb-10"
    >
      закрыть
    </button>
  </div>
  <div v-else>
    <h3 class="font-semibold text-[24px]">Выберите письмо !!!</h3>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: ['mailId'],
  computed: {
    email() {
      return this.emails.find((e) => e.id === this.mailId)
    }
  }
}
</script>
