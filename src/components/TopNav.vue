<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <button class="btn btn-primary" @click="getJoke">Get New Joke <i class="fas fa-plus"></i></button>
      </div>
      <div class="col-4">
        <button class="btn btn-secondary">Download All <i class="fas fa-file-export"></i></button>
      </div>
      <div class="col-4">
        <button class="btn btn-danger" @click="removeJokes">Clear <i class="fas fa-ban"></i></button>
      </div>
    </div>

    <div class="container mt-3">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Joke Keywords">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary">
            Search <i class="fas fa-search pl-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',

  methods: {
    getJoke () {
      this.$store.dispatch('getRandomJoke')
    },

    removeJokes () {
      this.$store.commit('CLEAR_JOKES')
    },

    searchJokes () {

    }
  }
}
</script>
