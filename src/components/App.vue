<template>
  <div>
    <div id="day-bar">
      <div v-for="day in weekDays">{{ day }}</div>
    </div>
    <div id="calendar">
      <div class="calendar-week" v-for="week in weeks">
        <calendar-day v-for="day in week" :day="day">{{ day }}</calendar-day>
      </div>
    </div>
  </div>
</template>
<script>
  import CalendarDay from './CalendarDay.vue';

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
      weekDays() {
        return this.weeks[0].map(day => day.format('ddd'));
      },
    },
    components: {
      CalendarDay,
    },
  };
</script>
