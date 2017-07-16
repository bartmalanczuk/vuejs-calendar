import Vue from 'vue'
import moment from 'moment-timezone';
import { extendMoment } from 'moment-range';

import './style.scss';
import App from './components/App.vue';

extendMoment(moment);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return moment } });

new Vue({
  el: '#app',
  components: {
    App,
  },
});
