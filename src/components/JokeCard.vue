<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-1">
          <button class="btn btn-outline-success"><i class="fas fa-file-download"></i></button>
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

  props: {
    jokeId: String,
    text: String
  },

  methods: {
    remove() {
      this.$store.commit('REMOVE_JOKE', this.jokeId)
    }
  }
}
</script>
