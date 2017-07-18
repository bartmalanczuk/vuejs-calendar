import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMonth: 7,
    currentYear: 2017,
  },
  mutations: {
    updateCurrentMontAndYear(state, date) {
      state.currentMonth = date.get('month') + 1;
      state.currentYear = date.get('year');
    },
  },
});
