<template>
  <div>
    <div v-for="week in weeks">
      <div v-for="day in week">{{ day }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        month: 2,
        year: 2017,
      };
    },
    computed: {
      weeks() {
        const day = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

        return Array.from(this.$moment.range(
          this.$moment(day).startOf('isoweek'),
          this.$moment(day).endOf('month').endOf('isoweek'),
        ).by('week')).map((week) => {
          return Array.from(this.$moment.range(
            this.$moment(week).startOf('isoweek'),
            this.$moment(week).endOf('isoweek'),
          ).by('day'));
        });
      },
    },
  };
</script>
