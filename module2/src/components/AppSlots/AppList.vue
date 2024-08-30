<template>
    <div class="card">
        <ul>
            <li v-for="(item, index) in 5"> 
                <slot :someName="item" :idx="index"></slot>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>