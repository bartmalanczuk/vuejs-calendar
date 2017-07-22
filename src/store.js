import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import moment from 'moment';

Vue.use(Vuex);

export default function (events) {

  return new Vuex.Store({
    state: {
      currentMonth: 7,
      currentYear: 2017,
      events: events.map((event) => {
        return Object.assign({}, event, { date: moment(event.date) });
      }),
      eventFormPosition: {x: 0, y: 0},
      isEventFormActive: false,
      selectedDay: undefined,
    },
    mutations: {
      updateCurrentMontAndYear(state, date) {
        state.currentMonth = date.get('month') + 1;
        state.currentYear = date.get('year');
        state.isEventFormActive = false;
        state.selectedDay = undefined;
      },
      openEventForm(state, { position, day }) {
        state.isEventFormActive = true;
        state.eventFormPosition = position;
        state.selectedDay = day;
      },
      closeEventForm(state) {
        state.isEventFormActive = false;
        state.selectedDay = undefined;
      },
      addEvent(state, event) {
        state.events.push(event);
        state.isEventFormActive = false;
        state.selectedDay = undefined;
      },
    },
    actions: {
      addEvent(context, event) {
        return Axios.post('/event', event).then(() => {
          context.commit('addEvent', event);
        });
      },
    },
  });
}
