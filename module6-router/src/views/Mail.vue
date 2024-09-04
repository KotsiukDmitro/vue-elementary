<template>
  <div class="bg-white p-5 m-auto w-[800px] rounded-xl flex">
    <div class="border-r border-gray-500">
      <ul>
        <li v-for="email in emails" :key="email.id" class="mb-5 mr-5 hover:underline hover:text-red-500 whitespace-nowrap">
          <router-link :to="'/mail/' + email.id">{{ email.theme }}</router-link>
        </li>
      </ul>
    </div>

    <div class="pl-5">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['emails'],
}
</script>
