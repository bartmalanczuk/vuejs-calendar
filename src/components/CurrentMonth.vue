<template>
  <div>
    <div>{{ formatDate(date) }}</div>
    <button @click="decrement()">-</button>
    <button @click="increment()">+</button>
  </div>
</template>
<script>
  export default {
    computed: {
      date() {
        return this.$moment(
          `${this.$store.state.currentYear}-${this.$store.state.currentMonth}-1`,
          'YYYY-M-D'
        );
      }
    },
    methods: {
      formatDate(rawDate) {
        return rawDate.format('MMMM YYYY');
      },
      decrement() {
        this.$store.commit('updateCurrentMontAndYear', this.$moment(this.date).subtract(1, 'month'));
      },
      increment() {
        this.$store.commit('updateCurrentMontAndYear', this.$moment(this.date).add(1, 'month'));
      },
    },
  };
</script>
