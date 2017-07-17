<template>
  <div>{{ formatDate(date) }}</div>
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
    },
  };
</script>
