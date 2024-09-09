<template>
  <div class="bg-white px-5 py-8 rounded-xl">
    <div class="mb-2 flex justify-between items-center">
      <h2 class="text-gray-600 text-2xl font-bold">Title Task</h2>
      <div class="border border-green-500 text-green-500 px-5 rounded-2xl">Status</div>
    </div>
    <hr class="mb-10" />
    <div class="mb-5">Data deadline dd.mm.yyyy</div>
    <button
      @click="$router.push('/task-content')"
      class="border border-green-600 text-white bg-green-600 rounded-xl px-5 hover:bg-green-400"
    >
      view task ...
    </button>
  </div>
</template>

<script>
export default {}
</script>
