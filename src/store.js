import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setAuthors (state, val) {
      state.authors = val
    }
  },
  actions: {
    getAuthors ({ commit }, payload) {
      commit('setAuthors', payload)
    }
  }
})
