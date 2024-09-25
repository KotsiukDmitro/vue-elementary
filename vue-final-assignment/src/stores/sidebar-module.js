import { defineStore } from "pinia";

export const useSidebar = defineStore('sidebar', {
    state: () => {
        return {
            sidebar: false
        }
    },
    actions: {
        open() {
            this.sidebar = true
        },
        close() {
            this.sidebar = false
        }
    }
})