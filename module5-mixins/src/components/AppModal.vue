<template>
  <div class="w-[500px] p-5 z-10 bg-slate-200 border-green-600 rounded-xl text-center absolute m-auto left-0 right-0 top-20">
    <h3 class="mb-3 text-center font-semibold text-2xl text-red-500">Модальное Окно</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio debitis, vero, ex est sed sapiente, similique veniam nihil non alias placeat quos.</p>

    <button
        @click="$emit('close')"
        class="border border-slate-600 text-white bg-slate-600 rounded-xl px-3 py-1 hover:bg-slate-400 mr-5 mt-5"
      >
        закрыть
      </button>
  </div>
 
</template>

<script>
export default {
   emits:['close']
}
</script>

<style scoped></style>