<template>
<header class="flex px-10 py-2 items-center text-[20px]">
    <h1 class="text-blue-400 mr-10">Vuex</h1>
    <strong>Счётчик: <span class="text-red-600">{{ counter }}</span></strong>
    <button @click="add" class="border border-blue-600 text-blue-600 px-5 pb-1 rounded-xl ml-auto">добавить 5</button>
</header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

    export default {
        computed: {
            // counter() {
            //     // return this.$store.state.counter 
            //     return this.$store.getters['count/counter'] 
            // },
            ...mapGetters('count', ['counter'])
        },
        methods: {
            ...mapMutations({addFive: 'count/add'}),
            add() {
                this.addFive({value: 5})
            //    this.$store.commit('add', 5) 
            //    this.$store.commit('add', {
            //     value: 5
            //    }) аналогичные три записи
            //    this.$store.commit({
            //     type: 'add',
            //     value: 5
            //    })
            }
        }
    }
</script>
 