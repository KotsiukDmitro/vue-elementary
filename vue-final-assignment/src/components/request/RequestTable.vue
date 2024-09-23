<template>
    <h3 v-if="requests.length === 0" class="text-center font-semibold text-[18px] text-blue-500">Заявок пока нет!</h3>
<table v-else class="">
    <thead>
        <tr>
            <th>#</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Действие</th>
        </tr>
    </thead>
    <tbody>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tbody>
</table>
</template>

<script setup>

defineProps(['requests'])

</script>

<style lang="scss" scoped>

</style>