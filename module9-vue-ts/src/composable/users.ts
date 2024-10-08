import { useFetch } from "./fetch";
import { ref, type Ref } from "vue";

interface User {
    id: number
    name: string
    email: string
}

type UsableUsers = Promise<{users: Ref<User[] | undefined>}>

export async function useUsers(): UsableUsers {
    
const loading = ref(false)
// альтернативная запись (не обязательно)
// const loading: Ref<boolean>= ref(false)
// const loading = ref<boolean>(false)

const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

    if (!loading.value) {
        await request()
        loading.value = true
    }
    return {users}
}