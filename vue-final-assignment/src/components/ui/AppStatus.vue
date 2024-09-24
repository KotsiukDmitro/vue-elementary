<template>
<span :class="className">{{ text }}</span>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
        validator(value) {
            return ['active', 'cancelled', 'done', 'pending'].includes(value)
        }
    }
})

const classesMap = {
    active: 'text-green-500',
    cancelled: 'text-red-500',
    done: 'text-blue-500',
    pending: 'text-orange-500'
}

const textMap = {
    active: 'Активен',
    cancelled: 'Отменен',
    done: 'Завершен',
    pending: 'Выполняется'
}

const className = ref(classesMap[props.type])
const text = ref(textMap[props.type])

</script>
