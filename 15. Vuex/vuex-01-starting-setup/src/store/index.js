import { createStore } from 'vuex';
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'
import counterModules from './modules/counter/index'

const store = createStore({
    modules: {
        numbers: counterModules
    },
    state: {
        isLoggedIn: false
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store;
