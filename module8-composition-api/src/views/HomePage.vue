<script>
import { ref, reactive, isRef, isReactive, provide } from 'vue'

import FrameworkInfo from '@/components/FrameworkInfo.vue'
import AppAlert from '@/components/AppAlert.vue'
import { useAlert } from '@/composable/alert'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    console.log(isRef(name)) //true
    console.log(isRef(version.value)) //false

    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log(isReactive(framework)) //true
    console.log(isReactive(framework.name)) //false

    function changeInfo() {
      name.value = 'Vue JS !!!'
      version.value = 4

      console.log(textInput.value.value)
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    // const{alert, toggle, close} = useAlert()

    return {
      change: changeInfo,
      textInput,
      firstName,
      changeVersion,
      //   alert,
      //   toggle,
      //   close
      ...useAlert()
    }
  },
  components: { FrameworkInfo, AppAlert }
}
</script>

<template>
  <div class="h-screen bg-slate-400">
    <AppAlert v-if="alert" title="Работаем с  Composition" type="bg-slate-200" @close="close" />

    <div class="bg-white p-5 m-auto w-[800px] rounded-xl mb-10">
      <h1 class="mb-2 text-2xl font-bold text-center">Vue Composition Api</h1>
      <small class="mb-3">Заменяет методы: data, methods, computed, watch</small>
      <hr class="mb-10" />

      <div class="mb-10 flex flex-col">
        <input type="text" ref="textInput" class="border border-gray-500 pl-3 rounded-lg mb-5" />
        <input
          v-model="firstName"
          type="text"
          ref="textInput"
          class="border border-gray-500 pl-3 rounded-lg"
        />
      </div>

      <button
        @click="change"
        class="border border-blue-600 text-white bg-blue-500 rounded-xl px-3 py-1 hover:bg-blue-400 mr-5 mb-10"
      >
        изменить
      </button>

      <button
        @click="toggle"
        class="border border-red-400 text-white bg-red-500 rounded-xl px-5 py-1 hover:bg-red-400 mr-5 mb-10"
      >
        Alert
      </button>
    </div>
    <FrameworkInfo :name="name" :version="version" @change-version="changeVersion" />
  </div>
</template>


