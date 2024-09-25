<template>
  <AppLoader v-if="loading" />
  <CustomPage title="Заявка" v-else-if="request" back>
    <p class="mb-2">
      <strong>ИМЯ</strong>: <span class="ml-3">{{ request.fio }}</span>
    </p>
    <p class="mb-2">
      <strong>ТЕЛЕФОН</strong>: <span class="ml-3">{{ request.phone }}</span>
    </p>
    <p class="mb-2">
      <strong>СУММА</strong>: <span class="ml-3">{{ currency(request.amount) }}</span>
    </p>
    <p class="mb-2">
      <strong>СТАТУС</strong>: <span class="ml-3"><AppStatus :type="request.status" /></span>
    </p>

    <select v-model="status" id="status" class="border px-5 rounded-md outline-none">
        <option value="done">завершен</option>
        <option value="cancelled">отменен</option>
        <option value="active">активен</option>
        <option value="pending">выполняется</option>
      </select>

    <div class="flex mt-5">
      <button
        @click="remove"
        class="border pb-1 px-5 text-red-500 text-[16px] rounded-3xl mr-10 hover:border-red-500"
      >
        Удалить
      </button>
      <button
        v-if="hasChanges"
        @click="update"
        class="border pb-1 px-5 text-green-500 text-[16px] rounded-3xl hover:border-green-500"
      >
        Обновить
      </button>
    </div>
  </CustomPage>
  <h3 v-else class="text-center text-4xl text-red-500">
    Заявки с таким ID = {{ id }} нет !!!
  </h3>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRequestStore } from '@/stores/request-module'
import { useRoute, useRouter } from 'vue-router'
import CustomPage from '@/components/ui/CustomPage.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppStatus from '@/components/ui/AppStatus.vue'
import { currency } from '@/utils/currency'

const store = useRequestStore()
const route = useRoute()
const loading = ref(true)
const request = ref({})
const status = ref()
const router = useRouter()
const id = route.params.id

onMounted(async () => {
  loading.value = true
  request.value = await store.loadById(id)
  loading.value = false
  status.value = request.value?.status
})

const hasChanges = computed(()=> request.value.status !==status.value)

async function remove() {
    await store.remove(id)
    router.push('/')
}
async function update() {
    const data = {...request, status:status.value, id: id}
    await store.update(data)
    request.value.status = status.value
}


</script>

