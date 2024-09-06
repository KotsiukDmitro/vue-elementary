<template>
    <div class="bg-white p-5 m-auto w-[800px] rounded-xl mb-10 mt-10">

        <h1 class=" text-3xl font-bold text-center">{{ appTitle }}</h1>

    </div>
</template>

<script>
import { useStore } from 'vuex';
    export default {

        setup() {

            const store = useStore()

            return {
                appTitle: store.getters.appTitle.toUpperCase()
            }
            
        }
        
    }
</script>
