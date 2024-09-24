<template>
    <h3 v-if="requests.length === 0" class="text-center font-semibold text-[18px] text-blue-500">Заявок пока нет!</h3>
<table v-else class="">
    <thead>
        <tr>
            <th>#</th>
            <th class="pl-2 pr-10">ФИО</th>
            <th class="px-10">Телефон</th>
            <th class="px-10">Сумма</th>
            <th class="px-10">Статус</th>
            <th class="px-10">Действие</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td class="pl-2 pr-10">{{ r.fio }}</td>
        <td class="px-10">{{ r.phone }}</td>
        <td class="px-10">{{ currency(r.amount) }}</td>
        <td class="px-10"><AppStatus :type="r.status" /></td>
        <td class="px-10">
            <RouterLink v-slot="navigate" custom to="{name: 'Request', params: {id: t.id}}">
                <button @click="navigate" class="border outline-none rounded-xl px-3 text-green-400">Open</button>
            </RouterLink>
        </td>
    </tr>
    </tbody>
</table>
</template>

<script setup>
import {currency} from '@/utils/currency';
import AppStatus from '../ui/AppStatus.vue';

defineProps(['requests'])


</script>
