import { Commit } from "vuex";

export const paginationModule = {
    state: () => ({ currentPage: 1, totalItems: 0, delimiter: 4 }),
    mutations: {
        setCurrentPage(state: { currentPage: number }, num: number) {
            state.currentPage = num;
        },
        setTotalItems(state: { totalItems: number }, num: number) {
            state.totalItems = num;
        },

    },
    actions: {
        setCurrentPage({ commit }: { commit: Commit }, num: number) {
            commit('setCurrentPage', num)
        },
        setTotalItems({ commit }: { commit: Commit }, num: number) {
            commit('setTotalItems', num)
        },
    },
    getters: {}
}