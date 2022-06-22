import { IEvent } from "@/types/types";
import { Commit } from "vuex";

export const eventsModule = {
    state: () => ({ events: [] }),
    mutations: {
        deleteEvent(state: { events: IEvent[] }, id: number) {
            state.events = state.events.filter(state => (state.id !== id))
        },
        createEvent(state: { events: IEvent[] }, event: IEvent) {
            state.events = [event, ...state.events]
        },
        fillEvents(state: { events: IEvent[] }, events: IEvent[]) {
            state.events = [...events]
        },
    },
    actions: {
        deleteEvent({ commit }: { commit: Commit }, id: number) {
            commit('deleteEvent', id)
        },
        createEvent({ commit }: { commit: Commit }, event: IEvent) {
            commit('createEvent', event)
        },
        fillEvents({ commit }: { commit: Commit }, events: IEvent[]) {
            commit('fillEvents', events)
        },

    },
    getters: {}
}