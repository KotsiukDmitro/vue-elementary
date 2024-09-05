import { createStore, createLogger } from "vuex";
import counterModules from "./modules/counter";
import mutations from "./modules/mutations";
import actions from "./modules/actions";

export default createStore({    
   plugins: [createLogger()],

   modules: {
        // counterModules
        //аналогтчная запись
        count: counterModules
   },

    state() {
        return {
            appTitle: 'Vuex Working !!!'
        }
    },

    mutations: mutations,
    actions: actions,

    getters: {
        uppercaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    }


})