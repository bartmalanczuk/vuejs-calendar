import VueCalendar from './app.js';
import store from './store.js';

export default function (context) {
  return VueCalendar(store(context.events));
};
