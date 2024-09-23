<template>
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
    }
})


document.title = `title| Клон Банка`
</script>
,