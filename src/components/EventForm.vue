<template>
  <div id="event-form" :class="{ active: isActive }" :style='{ top: `${position.y}px`, left:  `${position.x}px` }'>
    <h4>Add an event</h4>
    <div id="close-button" @click="close">&#10005</div>
    <p>{{ formatDate(day) }}</p>
    <div class="text">
      <input type="text" placeholder="Dinner at Pancho's" v-model="description">
    </div>
    <div class="buttons">
      <button @click="addEvent">Create</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        description: '',
      };
    },
    computed: {
      position() {
        return this.$store.state.eventFormPosition;
      },
      isActive() {
        return this.$store.state.isEventFormActive;
      },
      day() {
        return this.$store.state.selectedDay;
      },
    },
    methods: {
      close() {
        this.$store.commit('closeEventForm');
      },
      addEvent() {
        this.$store.commit(
          'addEvent',
          {description: this.description, date: this.$store.state.selectedDay},
        );
        this.description = '';
      },
      formatDate(raw) {
        return this.$moment(raw).format('dddd, MMM Do');
      },
    },
  };
</script>
