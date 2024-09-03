<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl flex">
    <div class="border-r border-gray-500 w-[100%]">
      <ul>
        <li v-for="email in emails" :key="email.id" class="mb-5 hover:underline">
          <a href="#">{{ email.theme }}</a>
        </li>
      </ul>
    </div>

    <div class="pl-5">
        <AppEmailBody />
    </div>
  </div>
</template>

<script>
import AppEmailBody from '@/components/AppEmailBody.vue'

export default {
  inject: ['emails'],
  components: { AppEmailBody }
}
</script>
