<script setup>
import { RouterView } from 'vue-router'
import Header from './views/TheHeader.vue'
</script>

<template>
  <div>
    <Header/>
    <div class="h-screen bg-slate-400 pt-20">
      <RouterView />
    </div>
  </div>
</template>

