<template>
  <div id="event-form" :class="{ active: true }" :style='{ top: `${position.y}px`, left:  `${position.x}px` }'>
    <h4>Add an event</h4>
    <p>Thursday, Feb 9th</p>
    <div class="text">
      <input type="text" placeholder="Dinner at Pancho's">
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      position() {
        return this.$store.state.eventFormPosition;
      },
    },
  };
</script>
