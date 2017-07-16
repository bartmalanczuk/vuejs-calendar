<template>
  <div class="day">{{ formatDay(day) }}</div>
</template>
<script>
  export default {
    props: ['day'],
    methods: {
      formatDay(raw) {
        return raw.format('D');
      },
    },
  };
</script>
