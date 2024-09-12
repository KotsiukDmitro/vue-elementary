<template>
  <div>
    <TheNavbar />
    <div class="h-screen bg-slate-400 pt-20">
   <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
</script>

