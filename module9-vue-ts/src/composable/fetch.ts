import { ref, type Ref } from "vue"

type FetchRequest = () => Promise<void>

interface UsableFetch<T> {
    response: Ref<T | undefined>,
    request: FetchRequest
}


export function useFetch<T>(url: RequestInfo, options?: RequestInit): UsableFetch<T> {

   const response = ref<T>()

   const request: FetchRequest = async ()=> {
    const res = await fetch(url, options)
    response.value = await res.json()
   }  

   return{response, request}
}

//https://jsonplaceholder.typicode.com/users