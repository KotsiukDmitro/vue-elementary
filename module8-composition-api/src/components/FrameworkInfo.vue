<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl">
    <p class="mb-5">
      Название: <strong>{{ name }}</strong>
    </p>
    <p class="mb-10">
      Версия: <strong>{{ version }} ({{ doubleVersion }})</strong>
    </p>

    <button
      @click="changeToThree"
      class="border border-amber-400 text-white bg-amber-500 rounded-xl px-3 py-1 hover:bg-amber-400 mr-5 mb-10"
    >
      изменить на 3 версию
    </button>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  props: ['name', 'version'],
  emits: ['change-version'],

  //   computed: {
  //     doubleVersion() {
  //       return this.version * 2
  //     }
  //   }

  setup(props, context) {
    function change() {
      context.emit('change-version', 3)
    }

    const version = inject('version')

    return {
      name: inject('name'),
      version,
      doubleVersion: computed(() => version.value * 2),
      changeToThree: change
    }
  }
}
</script>
