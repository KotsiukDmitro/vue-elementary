export default {
    namespaced: true,

    state() {
        return {
            counter: 1
        }
    },

    mutations: {
        increment(state) {
            state.counter++
        },
        add(state, payload) {
            state.counter += payload.value
        }
    },

    actions: {
        incrementAsync(context, payload) {
            // console.log(context)          
          setTimeout(() => {
            context.commit('add', payload)
          }, payload.delay)
        }
      },

    getters: {
        counter(state) {
            // if (state.counter > 50) {
            //     return 0
            // }
            return state.counter
        },

        doubleCounter(state, getters, rootState, rootGetters) {
            console.log('state', state);
            console.log('rootState', rootState);
            console.log('rootGetters', rootGetters);

            return getters.counter*2
        }
    }
}
