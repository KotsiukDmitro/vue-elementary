import { defineStore } from 'pinia'
import requestAxios from '@/axios/request'
import { useAuthUserStore } from './auth-module'

export const useRequestStore = defineStore('request', {
    state: () => {
        const store = useAuthUserStore()

        return {
            requests: [],
            token: store.tokenUser
        }
    },

    actions: {
        async create(payload) {
            try {
                const { data } = await requestAxios.post(`/requests.json?auth=${this.token}`, payload)
                this.addRequest({ ...payload, id: data.name })
                this.setMessage()

            } catch (error) {
                this.setMessage(error.message, 'danger')

            }

        },
        setMessage(message, type) {
            message = 'Заявка успешно создана'
            type = 'primary'
            return {
                value: message,
                type: type
            }
        },
        addRequest(request) {
            this.requests.push(request)
        },
        setRequests(requests) {
            this.requests = requests
        },

        async load() {
            try {
                const { data } = await requestAxios.get(`/requests.json?auth=${this.token}`)
                const requests = Object.keys(data).map(id => ({ ...data[id], id }))
                this.setRequests(requests)

            } catch (error) {
                this.setMessage(error.message, 'danger')
            }
        },
    },

    getters: {
        requestsList(state) {
            return state.requests
        }
    }
})