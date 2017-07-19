<template>
  <div :class="classDescriptor" @click="captureClick">{{ formatDay(day) }}</div>
</template>
<script>
  export default {
    props: ['day'],
    methods: {
      formatDay(raw) {
        return raw.format('D');
      },
      captureClick(event) {
        this.$store.commit('openEventForm', {x: event.x, y: event.y});
      },
    },
    computed: {
      classDescriptor() {
        return {
          day: true,
          today: this.day.isSame(this.$moment(), 'day'),
          past: this.day.isBefore(this.$moment(), 'day'),
        };
      },
    },
  };
</script>
