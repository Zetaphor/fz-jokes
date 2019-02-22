<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-1">
          <button class="btn btn-outline-success" v-if="!$store.state.downloadSelectMode" @click="download"><i class="fas fa-file-download"></i></button>

          <div class="custom-control custom-checkbox" v-else>
            <input type="checkbox" class="custom-control-input" :id="jokeId" v-model="selected" @change="selectionChanged">
            <label class="custom-control-label" :for="jokeId"></label>
          </div>
        </div>
        <div class="col-10">
          <p class="card-text">{{ text }}</p>
        </div>
        <div class="col-1 btn-delete">
          <button class="btn btn-outline-danger" @click="remove"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JokeCard',

  data () {
    return {
      /*
        BUG: This doesn't get reset when selections are cleared from store
        Could add a watch to fix this, or change model binding approach
      */
      selected: false
    }
  },

  props: {
    jokeId: String,
    text: String
  },

  methods: {
    remove () {
      this.$store.commit('REMOVE_JOKE', this.jokeId)
    },

    selectionChanged () {
      if (this.selected) this.$store.commit('SELECT_JOKE', this.jokeId)
      else this.$store.commit('DESELECT_JOKE', this.jokeId)
    },

    download () {
      this.$store.dispatch('downloadJoke', this.jokeId)
    }
  }
}
</script>
