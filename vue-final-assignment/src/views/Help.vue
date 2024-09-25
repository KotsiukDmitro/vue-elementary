<template>
  <CustomPage title="FAQ's" back>
    <QuestionItem v-for="q in questions" :question="q" :key="q.title" />
  </CustomPage>
</template>

<script setup>
import CustomPage from '@/components/ui/CustomPage.vue'
import QuestionItem from '@/components/questions/QuestionItem.vue'

const questions = [
  { title: 'Первый вопрос?', text: 'Ответ на первый вопрос' },
  { title: 'Второй вопрос?', text: 'Ответ на второй вопрос' },
  { title: 'Третий вопрос?', text: 'Ответ на третий вопрос' }
]
</script>

