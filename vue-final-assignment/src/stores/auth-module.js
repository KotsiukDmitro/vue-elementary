const TOKEN_KEY = 'jwt-token'
import { defineStore } from "pinia"
import axios from "axios"
import { errors } from "@/utils/errors"

export const useAuthUserStore = defineStore('authUser', {

    state: () => {
        return {
            token: localStorage.getItem(TOKEN_KEY),
            message: null
        }
    },

    actions: {
        async login(payload) {
            try {
                // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process?.env?.VUE_APP_FB_KEY}`
                const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAkj9ENLVgFti0ZVpWDt4B-TDTpRj8umA'
                const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
     
                this.token = payload
                localStorage.setItem(TOKEN_KEY, data.idToken)

            } catch (e) {
                console.log(e.response.data);
                
                const err = errors(e.response.data.error.message)
                this.setMessage(err)
                console.log(errors(e.response.data.error.message))   
                throw new Error()

            }
            this.token = payload
            localStorage.setItem(TOKEN_KEY, payload)

        },
        logout() {
            this.token = null
            localStorage.removeItem(TOKEN_KEY)
        },

        setMessage(mes) {
            this.message = mes
            return {
                value: mes,
                type: 'danger'
            }
        },

        clearMessage() {
            this.message = null
        },

        setMessageClose(mes) {
            this.setMessage(mes)
            setTimeout(() => {
                this.clearMessage()
            }, 5000)

        }

    },
    getters: {
        tokenUser(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
        }
    }
})