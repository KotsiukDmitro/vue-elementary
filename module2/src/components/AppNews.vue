<script>
import CustomButton from './CutomButton.vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    wasRead: Boolean
  },

  //   emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },

  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
    // unMark() {
    //     this.$emit('unmark', this.id)
    // }
  },
  components: { CustomButton }
}
</script>



<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <CustomButton
      @action="open"
      color="border-red-500"
    >{{ isNewsOpen ? 'закрыть' : 'открыть' }}</CustomButton>

    <CustomButton
      v-if="wasRead"
      @action="$emit('unmark', id)"
      color="border-red-700"
    >Отметить как непрочитано</CustomButton>
    <div v-if="isNewsOpen" class="mt-5">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo eius maxime ratione nobis
        iusto cum facere fugit libero voluptas at quae, odit esse tempora delectus! Facilis
        architecto ex accusamus?
      </p>

      <CustomButton
        @action="mark"
        v-if="!wasRead"
        color="border-green-500"
      >Читать статью</CustomButton>
    </div>
  </div>
</template>