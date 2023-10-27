<template>
  <div>
    <div ref="rater"></div>
  </div>
</template>

<script>
import Rater from 'rater-js'

export default {
  name: 'RatingComponent',
  props: {
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.initializeRater()
  },
  methods: {
    initializeRater() {
      const initialRating = Math.floor(this.initialRating) || 0
      const rater = new Rater({
        element: this.$refs.rater,
        rating: initialRating,
      })

      console.log(rater)
    },
  },
}
</script>
