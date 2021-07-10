import { createStore } from 'vuex';

const counterModules = {
    namespaced: true,
    state: {
        counter: 0,
    },
    mutations: {
        increment(state) {
            // state.counter++
            state.counter = state.counter + 1
        },
        increase (state, payload) {
            state.counter = state.counter + payload.value
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000)
        },
        increase(context, payload) {
            context.commit('increase', payload);
        }
    },
    getters: {
        testAuth(state, getters, rootState, rootGetters) {
            console.log(rootGetters)
            return rootState.isLoggedIn
        },
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter
        }
    },
}
const store = createStore({
    modules: {
        numbers: counterModules
    },
    state: {
        isLoggedIn: false
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {

        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    }
})

export default store;
