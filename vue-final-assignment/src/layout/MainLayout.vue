<template>
  <div>
    <TheNavbar />
    <TheSidebar />
    <div class="h-screen bg-slate-400 pt-20">
      <AppMessage />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import AppMessage from '@/components/ui/AppMessage.vue';
import TheSidebar from '@/components/TheSidebar.vue';
</script>

