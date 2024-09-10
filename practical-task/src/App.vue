<script setup>
import { RouterView } from 'vue-router'
import Header from './views/TheHeader.vue'
</script>

<template>
  <div>
    <Header class="fixed w-full"/>
    <div class="min-h-screen bg-slate-400 pt-20 pb-20">
      <RouterView />
    </div>
  </div>
</template>

