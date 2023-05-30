import {createStore} from "vuex";
import rootMmutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";
import counterModule from './counter/index'

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false,
        };
    },
    mutations: rootMmutations,
    actions: rootActions,
    getters: rootGetters,

});

export default store;
