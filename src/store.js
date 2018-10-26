import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    authors: [],
    userToken: null
  },
  mutations: {
    setToken (state, val) {
      state.userToken = val
    },
    setAuthors (state, val) {
      state.authors = val
    }
  },
  actions: {
    saveUserToken ({ commit }, token) {
      commit('setToken', token)
    },
    getAuthors ({ commit }, payload) {
      commit('setAuthors', payload)
    }
  }
})
