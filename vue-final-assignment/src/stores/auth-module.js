const TOKEN_KEY = 'jwt-token'
import { defineStore } from "pinia"
import axios from "axios"
import { errors } from "@/utils/errors"

export const useAuthUserStore = defineStore('authUser', {

    state: () => {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },

    actions: {
        async login(payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process?.env?.VUE_APP_FB_KEY}`
                const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
                // console.log(data.idToken);

                this.token = payload
                localStorage.setItem(TOKEN_KEY, payload)

            } catch (e) {
                // console.log(errors(e.response.data.error.message))   
                console.log(e);

            }
            this.token = payload
            localStorage.setItem(TOKEN_KEY, payload)

        },
        logout() {
            this.token = null
            localStorage.removeItem(TOKEN_KEY)
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