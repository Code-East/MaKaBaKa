import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        // 修改用户
        setUser(state, userdata) {
            state.user = userdata;
        }
    },
    getters: {},
    actions: {},
    modules: {}
})