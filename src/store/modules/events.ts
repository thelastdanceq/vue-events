import { events } from "@/constants/events";
import { IEvent } from "@/types/types";

export const eventsModule = {
    state: () => ({ events }),
    mutations: {
        deleteEvent(state: { events: IEvent[] }, id: number) {
            state.events = state.events.filter(state => (state.id !== id))
        },
        createEvent(state: { events: IEvent[] }, event: IEvent) {
            state.events = [event, ...state.events]
        },
    },
    actions: {
        deleteEvent({ commit }: any, id: number) {
            commit('deleteEvent', id)
        },
        createEvent({ commit }: any, event: IEvent) {
            commit('createEvent', event)
        },
    },
    getters: {}
}