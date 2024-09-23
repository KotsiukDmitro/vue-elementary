<script setup>
import CustomPage from '@/components/ui/CustomPage.vue'
import RequestTable from '@/components/request/RequestTable.vue'
import CustomModal from '@/components/ui/CustomModal.vue'
import RequestModal from '@/components/request/RequestModal.vue'
import { ref } from 'vue'

const modal = ref(false)
</script>

<template>
  <CustomPage title="Список заявок">
    <template #header>
      <button
        @click="modal = true"
        class="border pb-2 pt-1 px-5 text-white text-[20px] bg-green-500 rounded-3xl ml-auto"
      >
        создать
      </button>
    </template>
    <RequestTable :requests="[]"></RequestTable>

    <Teleport to="body">
      <CustomModal v-if="modal" title="Создать заявку" @close="modal = false">
        <RequestModal @created="modal = false"></RequestModal>
      </CustomModal>
    </Teleport>   
  </CustomPage>

</template>
