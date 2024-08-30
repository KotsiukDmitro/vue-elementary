<template>
 <div class="flex flex-col mb-6 relative"
          >
        <label :for="id" class="mb-2 italic">{{ label }}</label>
        <input
          type="text"
          :id="id"
          @value="modelValue"
          @input="change"
          :placeholder="placeholder"
          class="border px-5 rounded-md"   
          :class="{'border-red-600': error}"      
        />
        <small class="text-red-500 absolute -bottom-[20px]">{{ error }}</small>
      </div>
</template>

<script>
    export default {
        emits:['update:modelValue'],
        props: {
            modelValue: String,
            label: String,
            placeholder: String,
            error: String
        },
        data() {
            return {
                id: 'input-' + Math.random()
            }
        },
        methods: {
         change(event){
            this.$emit('update:modelValue', event.target.value)

         }   
        },
        
    }
</script>

<style scoped>

</style>