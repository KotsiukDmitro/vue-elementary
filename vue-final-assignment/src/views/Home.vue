<script setup>
import CustomPage from '@/components/ui/CustomPage.vue'
import RequestTable from '@/components/request/RequestTable.vue'
import CustomModal from '@/components/ui/CustomModal.vue'
import RequestModal from '@/components/request/RequestModal.vue'
import { ref, computed, onMounted } from 'vue'
import { useRequestStore } from '@/stores/request-module'
import AppLoader from '@/components/ui/AppLoader.vue'

const modal = ref(false)
const store = useRequestStore()
const requests = computed(() => store.requestsList)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await store.load()
  loading.value = false
})
</script>

<template>
  <AppLoader v-if="loading" />
  <CustomPage v-else title="Список заявок">
    <template #header>
      <button
        @click="modal = true"
        class="border pb-2 pt-1 px-5 text-white text-[20px] bg-green-500 rounded-3xl ml-auto"
      >
        создать
      </button>
    </template>
    <RequestTable :requests="requests"></RequestTable>

    <Teleport to="body">
      <CustomModal v-if="modal" title="Создать заявку" @close="modal = false">
        <RequestModal @created="modal = false"></RequestModal>
      </CustomModal>
    </Teleport>
  </CustomPage>
</template>
