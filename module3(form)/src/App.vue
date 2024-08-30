<template>
  <div class="w-[800px] m-auto mt-10 border p-10 border-gray-600 border-r-2 rounded-xl">
    <form @submit.prevent="submitHandler">
      <h1 class="text-center font-semibold text-2xl mb-10">Анкета на VUE разработчика</h1>
      <CustomInput label="Как тебя зовут?" placeholder="Введите имя" :error="errors.name" v-model="name" />

      <div class="flex flex-col mb-6">
        <label for="age" class="mb-2 italic">Выберите возраст</label>
        <input v-model.number="age" type="number" id="age" max="50" min="18" class="border px-5 rounded-md" />
      </div>

      <div class="flex flex-col mb-6 italic">
        <label for="city" class="mb-2">Ваш город</label>
        <select id="city" class="border px-5 rounded-md" v-model="city">
          <option value="zp">Запорожье</option>
          <option value="kiev">Киев</option>
          <option value="dp">Днепр</option>
        </select>
      </div>

      <h2 lass="mb-2 italic ">Готов к переезду в другой город?</h2>
      <label><input v-model="relocate" type="radio" name="trip" value="yes" /> Да</label> <br />
      <label><input v-model="relocate" type="radio" name="trip" value="no" /> Нет</label>

      <h2 class="mb-2 italic mt-3">Что знаешь o Vue?</h2>
      <div>
        <label><input v-model="skills" type="checkbox" name="skill" value="vuex" /> Vuex</label>
      </div>
      <div>
        <label><input v-model="skills" type="checkbox" name="skill" value="cli"/> Vue CLI</label>
      </div>
      <div>
        <label><input v-model="skills" type="checkbox" name="skill" value="router"/> Vue Router</label>
      </div>

      <div class="mt-5 flex">
        <label class="ml-auto mr-10"><input v-model="agree" type="checkbox" /> Согласие на обработку данных</label>
      </div>

      <button type="submit" class="border p-2 text-white bg-slate-500 rounded-xl mt-5">
        отправить
      </button>
    </form>
  </div>
</template>

<script>
import CustomInput from './components/CustomInput.vue';


export default {
  data() {
    return {
      name: '',
      age: 23,
      city: 'zp',
      relocate: 'yes',
      skills: [],
      agree: null,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
      if(this.name.length === 0) {
        this.errors.name = 'Поле обязательно для заполнения'
        isValid = false
      }else {
        this.errors.name = null
      }
      return isValid
    },

    submitHandler() {
      if(this.formIsValid()) {
      console.group('form data')
      console.log('Name:', this.name);
      console.log('Age:', this.age);
      console.log('City:', this.city);
      console.log('Готовность к переезду:', this.relocate);
      console.log('Agree:', this.agree);
      console.groupEnd()
      }
     
    }
  },
  components: {CustomInput}
}
</script>

<style scoped>

</style>