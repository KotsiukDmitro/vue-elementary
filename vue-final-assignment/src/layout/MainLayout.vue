<template>
  <div>
    <TheNavbar />
    <div class="h-screen bg-slate-400 pt-20">
      <AppMessage />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import AppMessage from '@/components/ui/AppMessage.vue';
</script>

