import Vue from 'vue'
import Vuex from 'vuex'
import { eventsModule as events } from './modules/events'
import { loadingModule as loading } from './modules/loading'
import { paginationModule as pagination } from './modules/pagination'
import { detailsModule as details } from './modules/details'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    events,
    loading,
    pagination,
    details,
  }
})