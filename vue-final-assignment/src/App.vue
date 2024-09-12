<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MainLayout from './layout/MainLayout.vue'
import AuthLayout from './layout/AuthLayout.vue'


export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: { MainLayout, AuthLayout }
}
</script>

<template>
  <!-- <main-layout></main-layout> -->
  <auth-layout></auth-layout>

    <!-- <component is:=" layout + '-layout'" v-if="layout"></component> -->


</template>


