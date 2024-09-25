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
        async loadById(id) {
            try {
                const { data } = await requestAxios.get(`/requests/${id}.json?auth=${this.token}`)
                return data

            } catch (error) {
                this.setMessage(error.message, 'danger')
            }
        },
        async remove(id) {
            try {
                await requestAxios.delete(`/requests/${id}.json?auth=${this.token}`)

            } catch (error) {
                this.setMessage(error.message, 'danger')
            }
        },
        async update(request) {
            try {
                await requestAxios.put(`/requests/${request.id}.json?auth=${this.token}`, request)

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