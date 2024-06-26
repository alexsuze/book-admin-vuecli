import * as API from '@/api/index';

export default {
    namespaced: true,
    state: {
        menuData: {}
    },
    getters: {
        menuData(state) {
            return state.menuData;
        }
    },
    actions: {
        async init({ commit }, data) {
            try {
                const res = await API.apiMenu(data);
                await commit('Init', res.data);
                return res.data;
            } catch (error) {
                return error.response;
            }
        }
    },
    mutations: {
        Init(state, payload) {
            console.log(payload);
        }
    },
    modules: {
    }
}
