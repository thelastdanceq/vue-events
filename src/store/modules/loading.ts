import { Commit } from "vuex";

export const loadingModule = {
    state: () => ({ isLoading: true }),
    mutations: {
        toggleLoading(state: { isLoading: boolean }, to: boolean) {
            state.isLoading = to
        },
    },
    actions: {
        toggleLoading({ commit }: { commit: Commit }) {
            commit('toggleLoading')
        },
    },
    getters: {}
}