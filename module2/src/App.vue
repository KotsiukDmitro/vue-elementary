<script>
import CustomButton from './components/AppOld/CustomButton.vue'
import TextOne from './components/TextOne.vue'
import TextTwo from './components/TextTwo.vue'

export default {
  data() {
    return {
      active: 'one' // two
    }
  },
  mounted() {
    this.$refs.myBtn.btnLog()
  },
  computed: {
    // componentName() {
    //   return 'text-' + this.active
    // },
    //аналогичная запись с расширеными возможностями
    componentName: {
      get() {
        return 'text-' + this.active
      },
      set(value) {
        console.log('componentName', value)
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: { CustomButton, TextOne, TextTwo }
}
</script>

<template>
  <div class="container">
    <async-component></async-component>
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>
      <hr />
      <CustomButton ref="myBtn" :color="oneColor" @action="active = 'one'">One</CustomButton>
      <CustomButton :color="twoColor" @action="active = 'two'">Two</CustomButton>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<style scoped>
</style>




