<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
import FrameworkInfo from './components/FrameworkInfo.vue'

export default {
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  //   methods: {
  //     changeInfo() {
  //       this.name = 'Vue JS !!!'
  //       this.version = 4
  //     }
  //   },
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2
  //   }
  // } ,
  // watch: {
  //   doubleVersion(newValue) {

  //   }
  // }

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

    // const doubleVersion = computed(() => version.value * 2)

    // watch(doubleVersion, (newValue, oldValue) => {
    //   console.log('new', newValue)
    //   console.log('old', oldValue)
    // })

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version', newValues[0])
    //   console.log('new version', newValues[1])
    //   console.log('old version', oldValues[0])
    //   console.log('old name', oldValues[1])
    // })

    console.log(isReactive(framework)) //true
    console.log(isReactive(framework.name)) //false

    function changeInfo() {
      name.value = 'Vue JS !!!'
      version.value = 4
      // framework.name = 'Vue JS !!!'
      // framework.version = 4

      console.log(textInput.value.value)
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      // name: framework.value.name,
      // version: framework.value.version,
      // ...toRefs(framework)

      // framework: framework,
      change: changeInfo,
      // doubleVersion,
      textInput,
      firstName,
      changeVersion
    }
  },
  components: { FrameworkInfo }
}
</script>

<template>
  <header class="px-5 py-2 flex">
    <strong class="text-blue-400">Vue Composition Api</strong>
    <ul>
      <li></li>
    </ul>
  </header>
  <div class="h-screen bg-slate-400 pt-20">
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
    </div>
    <FrameworkInfo :name="name" :version="version" @change-version="changeVersion" />
  </div>
</template>


