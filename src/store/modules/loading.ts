
export const loadingModule = {
    state: () => ({ isLoading: true }),
    mutations: {
        toggleLoading(state: { isLoading: boolean }) {
            state.isLoading = !state.isLoading;
        },
    },
    actions: {
        toggleLoading({ commit }: any) {
            commit('toggleLoading')
        },
    },
    getters: {}
}