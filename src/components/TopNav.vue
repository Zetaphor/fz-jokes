<template>
  <div class="container">
    <h1>Dad Joke Viewer/Downloader</h1>

    <div class="row">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Joke Keywords" v-model="searchQuery" @keyup.enter="searchJokes">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="searchJokes">
            Search <i class="fas fa-search pl-2"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-sm-12 mt-2">
        <button class="btn btn-primary" @click="getJoke">Get Random Joke <i class="fas fa-plus"></i></button>
      </div>
      <div class="col-lg-4 col-sm-12 mt-2">
        <button class="btn btn-secondary" @click="enableSelectMode" v-if="!$store.state.downloadSelectMode">Download Multiple <i class="fas fa-file-export"></i></button>
        <span v-else>
          <button class="btn btn-outline-success" @click="downloadSelected" :disabled="!$store.state.downloadSelection.length">Download <i class="fas fa-file-export"></i></button>
          <button class="btn btn-outline-danger" @click="cancelSelection">Cancel <i class="fas fa-ban"></i></button>
        </span>
      </div>
      <div class="col-lg-4 col-sm-12 mt-2">
        <button class="btn btn-danger" @click="removeJokes">Clear <i class="fas fa-ban"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',

  data () {
    return {
      searchQuery: ''
    }
  },

  methods: {
    getJoke () {
      this.$store.dispatch('getRandomJoke')
    },

    removeJokes () {
      this.$store.dispatch('removeJokes')
    },

    searchJokes () {
      this.$store.dispatch('searchJokes', this.searchQuery)
    },

    enableSelectMode () {
      this.$store.commit('SET_SELECT_MODE', true)
    },

    cancelSelection () {
      this.$store.commit('CLEAR_SELECTIONS')
      this.$store.commit('SET_SELECT_MODE', false)
    },

    downloadSelected () {
      if (this.$store.state.downloadSelection.length === 1) this.$store.dispatch('downloadJoke', this.$store.state.downloadSelection[0])
      else this.$store.dispatch('downloadJokes')
    }
  }
}
</script>
