<template>
  <div v-if="sidebar" class="fixed right-0 top-0 min-h-screen w-[300px] z-50 bg-slate-200 bored border-l-slate-400">
    <div class="relative px-5 pt-20">
      <span @click="closeSidebar" class="absolute top-5 right-5 text-[30px] cursor-pointer text-red-500 hover:scale-150">&times;</span>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione error perspiciatis?
        Aliquam corrupti facere eum quo quisquam, quasi minus.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebar } from '@/stores/sidebar-module';
import { computed } from 'vue';

const store = useSidebar()
const sidebar = computed(()=> store.sidebar)

function closeSidebar() {
    store.close()
}
</script>
