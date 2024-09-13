import { computed, watch } from 'vue';
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useAuthUserStore } from '@/stores/auth-module';
import { useRouter } from 'vue-router';

export function useLoginForm() {

  const store = useAuthUserStore() 
  const router = useRouter()
  const PASSWORD_MIN = 6
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur
  } = useField(
    'email',
    yup.string().trim().required('поле e-mail обязательно').email('введите корректный e-mail')
  )
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('поле пароль обязательно')
      .min(PASSWORD_MIN, `пароль не менее ${PASSWORD_MIN} символов`)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => submitCount.value = 0, 2000)
    }
  })

  const onSubmit = handleSubmit(async values => {
    await store.login(values)
    router.push('/')
  })

  return {
    email, password, eError, pError, eBlur, pBlur, onSubmit, isSubmitting, isTooManyAttempts
  }
}