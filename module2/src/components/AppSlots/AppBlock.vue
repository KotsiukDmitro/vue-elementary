<script>


export default {
  
}
</script>

<template>

    <div class="card">
        <slot name="header"></slot>
        <slot><!-- Контент отсутствует --></slot>     
       <div v-if="$slots.footer">
          <slot name="footer"></slot>
       </div> 
    </div>

</template>

<style scoped>

</style>