import Vue from 'vue';
import moment from 'moment-timezone';
import { extendMoment } from 'moment-range';

import App from './components/App.vue';

extendMoment(moment);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return moment } });


export default function (store) {
  return new Vue({
    components: {
      App,
    },
    store,
    render(createElement) {
      return createElement(
        'div',
        { attrs: { id: 'app' } },
        [
          createElement('app'),
        ],
      );
    },
  });
}
