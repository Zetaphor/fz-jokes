import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import saveAs from 'file-saver'

Vue.use(Vuex)
Vue.use(VueResource)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,

  state: {
    apiUrl: 'https://icanhazdadjoke.com/',
    apiConfig: {
      headers: {
        Accept: 'application/json'
      }
    },
    jokes: {},
    downloadSelectMode: false,
    downloadSelection: []
  },

  mutations: {
    ADD_JOKE (state, jokeData) {
      Vue.set(state.jokes, jokeData.id, jokeData.joke)
    },

    REMOVE_JOKE (state, jokeId) {
      Vue.delete(state.jokes, jokeId)
    },

    CLEAR_JOKES (state) {
      state.jokes = {}
    },

    SET_SELECT_MODE (state, mode) {
      state.downloadSelectMode = mode
    },

    CLEAR_SELECTIONS (state) {
      state.downloadSelection = []
    },

    SELECT_JOKE (state, jokeId) {
      state.downloadSelection.push(jokeId)
    },

    DESELECT_JOKE (state, jokeId) {
      let index = state.downloadSelection.indexOf(jokeId)
      state.downloadSelection.splice(index, 1)
    }
  },

  actions: {
    getRandomJoke (context) {
      Vue.http.get(context.state.apiUrl, context.state.apiConfig).then(resp => {
        context.commit('ADD_JOKE', resp.body)
      }, error => {
        console.log(error)
      })
    },

    removeJokes (context) {
      context.commit('CLEAR_JOKES')
      context.commit('CLEAR_SELECTIONS')
      context.commit('SET_SELECT_MODE', false)
    },

    downloadJokes (context) {
      let jokeString = ''
      context.state.downloadSelection.forEach(jokeId => {
        jokeString += context.state.jokes[jokeId] + '\r\n---\r\n'
      })

      var blob = new Blob([jokeString], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, 'multipleJokes.txt')
    },

    downloadJoke (context, jokeId) {
      var blob = new Blob([context.state.jokes[jokeId]], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, 'singleJoke.txt')
    }
  }
})
