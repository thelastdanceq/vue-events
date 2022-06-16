import { IEvent } from "@/types/types";
import { Commit } from "vuex";

export const detailsModule = {
    state: () => ({ event: {} }),
    mutations: {
        fillDetails(state: { event: IEvent }, item: IEvent) {
            state.event = { ...item }
        },

    },
    actions: {
        fillDetails({ commit }: { commit: Commit }, item: IEvent) {
            commit('fillDetails', item)
        },

    },
    getters: {
        getDetails: ((state:{ event: IEvent } ) => state.event)
    }
}