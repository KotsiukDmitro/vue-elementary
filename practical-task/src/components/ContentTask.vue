<template>
  <div class="bg-white px-5 py-8 rounded-xl w-[800px] m-auto">
    <h2 class="text-gray-600 text-2xl font-bold">Title Task</h2>
    <hr class="mb-10" />
    <div class="mb-5">Status: <span class="ml-1 text-green-500">Status</span></div>
    <div class="mb-5">Data deadline: <span>dd.mm.yyyy</span></div>
    <div class="mb-5">Description: <span>short description task</span></div>
    <div class="flex">
      <button class="border border-green-600 text-green-600 bg-white rounded-xl px-5 hover:bg-green-500 hover:text-white mr-5">
        take on work
      </button>
      <button class="border border-green-600 text-white bg-green-600 rounded-xl px-5 hover:bg-green-700 mr-5">
        complete
      </button>
      <button class="border border-red-500 text-white bg-red-500 rounded-xl px-5 hover:bg-red-600">
        cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
