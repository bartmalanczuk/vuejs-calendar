import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
import { extendMoment } from 'moment-range';

import './style.scss';
import App from './components/App.vue';
import store from './store.js';

extendMoment(moment);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return moment } });

new Vue({
  el: '#app',
  components: {
    App,
  },
  store,
});
