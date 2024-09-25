<template>
  <div v-if="back" class="text-white mb-5 ml-20  hover:underline">
    <RouterLink to="/">&#8656; Вернуться на главную</RouterLink>
  </div>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl ">
    <h1 class=" font-semibold text-2xl mb-10 flex justify-between items-center">
        {{ title }} <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    back: {
      type: Boolean,
      default: false
    }
})


document.title = `title| Клон Банка`
</script>
,