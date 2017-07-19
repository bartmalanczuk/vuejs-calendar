<template>
  <div>
    <div id="header">
      <div>
        <h1>Vue.js Calendar</h1>
      </div>
      <div>
        <current-month></current-month>
      </div>
    </div>
    <div id="day-bar">
      <div v-for="day in weekDays">{{ day }}</div>
    </div>
    <div id="calendar">
      <div class="calendar-week" v-for="week in weeks">
        <calendar-day v-for="day in week" :day="day">{{ day }}</calendar-day>
      </div>
    </div>
    <event-form></event-form>
  </div>
</template>
<script>
  import CalendarDay from './CalendarDay.vue';
  import CurrentMonth from './CurrentMonth.vue';
  import EventForm from './EventForm.vue';

  export default {
    computed: {
      month() { return this.$store.state.currentMonth },
      year() { return this.$store.state.currentYear },
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
      CurrentMonth,
      CalendarDay,
      EventForm,
    },
  };
</script>
