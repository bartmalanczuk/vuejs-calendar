<template>
  <div :class="classDescriptor" @click="captureClick">
    {{ formatDay(day) }}
    <ul class="event-list">
      <li v-for="event in events">{{ event.description }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['day'],
    methods: {
      formatDay(raw) {
        return raw.format('D');
      },
      captureClick(event) {
        this.$store.commit(
          'openEventForm',
          { position: { x: event.x, y: event.y }, day: this.day },
        );
      },
    },
    computed: {
      events() {
        return this.$store.state.events.filter((event) => event.date.isSame(this.day, 'day'));
      },
      classDescriptor() {
        return {
          day: true,
          today: this.day.isSame(this.$moment(), 'day'),
          past: this.day.isBefore(this.$moment(), 'day'),
          active: this.$store.state.selectedDay && this.day.isSame(this.$store.state.selectedDay, 'day'),
        };
      },
    },
  };
</script>
