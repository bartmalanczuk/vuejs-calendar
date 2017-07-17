import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
import { extendMoment } from 'moment-range';

import './style.scss';
import App from './components/App.vue';

extendMoment(moment);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return moment } });

Vue.use(Vuex);

new Vue({
  el: '#app',
  components: {
    App,
  },
  store: {
    state: {
      currentMonth: 7,
      currentYear: 2017,
    },
    mutations: {},
  },
});
