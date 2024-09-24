<template>
    <div v-if="message" class="text-center border border-red-500 rounded-xl bg-white p-5 max-w-fit m-auto mb-5 relative">
        <p v-if="title">{{ title }}</p>
        <p>{{ message}}</p>
        <span @click="close" class="absolute top-0 right-3 cursor-pointer hover:text-red-500 hover:scale-125 hover:font-bold">&times;</span>

    </div>
</template>

<script setup>
import { useAuthUserStore } from '@/stores/auth-module';
import { computed } from 'vue';

const store = useAuthUserStore()
const TITLE_MAP = {
    primary: 'Успешно!',
    danger: 'Ошибка!' ,
    warning: 'Внимание!'
}


const message = computed(() => store.message)
const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

function close() {
    store.clearMessage()
}

</script>
