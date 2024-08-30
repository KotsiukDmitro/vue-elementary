<script>
import AppBlock from './components/AppSlots/AppBlock.vue'
import AppList from './components/AppSlots/AppList.vue'

export default {
  components: { AppBlock, AppList }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <AppList>
      <template #default="{someName, idx}">
        <span style="color: orangered">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ someName }}
        </span>
      </template>
    </AppList>

    <AppBlock>
      <p>Контент нового блока</p>
      <template #header>
        <h3>Это заголовок</h3>
      </template>
      <template v-slot:footer>
        <hr />
        <small>Это футер</small>
      </template>
    </AppBlock>
  </div>
</template>

<style scoped>
</style>




