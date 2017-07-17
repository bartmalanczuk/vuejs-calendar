<template>
  <div :class="classDescriptor">{{ formatDay(day) }}</div>
</template>
<script>
  export default {
    props: ['day'],
    methods: {
      formatDay(raw) {
        return raw.format('D');
      },
    },
    computed: {
      classDescriptor() {
        return {
          day: true,
          today: this.day.isSame(this.$moment(), 'day'),
        };
      },
    },
  };
</script>
