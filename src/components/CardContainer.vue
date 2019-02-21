<template>
  <div class="container">
    <p v-if="!totalJokes">Search or click the button to view a joke</p>
    <p v-else>Showing {{ totalJokes }} <span v-if="totalJokes > 1">jokes</span><span v-else>joke</span></p>
    <joke-card v-for="(joke, id) in $store.state.jokes" :key="id" :jokeId="id" :text="joke"></joke-card>
  </div>
</template>

<script>
import JokeCard from './JokeCard.vue'

export default {
  name: 'CardContainer',

  components: {
    JokeCard
  },

  computed: {
    totalJokes: function () {
      return Object.keys(this.$store.state.jokes).length
    }
  }
}
</script>
