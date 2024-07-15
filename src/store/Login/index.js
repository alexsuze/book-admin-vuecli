import * as API from '@/api/index';

export default {
    namespaced: true,
    state: {
        loginData: {}
    },
    getters: {
        loginData(state) {
            return state.loginData;
        }
    },
    actions: {
        async login({ commit }, data) {
            try {
                const res = await API.apiLogin(data);
                await commit('Login', res.data);
                return res.data;
            } catch (error) {
                return error.response;
            }
        }
    },
    mutations: {
        Login(state, payload) {
            console.log(payload);
        }
    }
}
