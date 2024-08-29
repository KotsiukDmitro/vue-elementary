<script>
import AppNews from '../src/components/AppNews.vue'

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        { title: 'Изучение VUE-3', id: 1, isOpen: false, wasRead: false },
        { title: 'Изучение React', id: 2, isOpen: false, wasRead: false }
      ]
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unReadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: { AppNews }
}
</script>

<template>
  <div class="container">
    <div>
      <h2 class="mb-5">
        Актуальные новости <span class="ml-5 text-blue-600">{{ now }}</span>
      </h2>
      <hr class="w-24" />
      <span
        >Открыто: <strong>{{ openRate }} </strong> | Прочитано:
        <strong>{{ readRate }}</strong></span
      >
    </div>
    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :isOpen="item.isOpen"
      :wasRead="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"  
      @unmark="unReadNews"   
    />
  </div>
</template>




