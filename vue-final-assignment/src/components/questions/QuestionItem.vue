<template>
    <div @click="isOpen = !isOpen" class="cursor-pointer hover:bg-slate-100 p-5 rounded-md">
        <div ><strong>{{ question.title }}</strong></div>
        <div v-if="isOpen">{{ question.text }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(['question'])

const isOpen = ref(false)

</script>
