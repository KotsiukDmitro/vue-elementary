<template>
  <div>
    <div class="h-screen bg-slate-400 pt-20">
      <AppMessage />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import AppMessage from '@/components/ui/AppMessage.vue';



</script>
