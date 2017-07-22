import './style.scss';
import store from './store.js';
import VueCalendar from './app.js';

VueCalendar(store(__INITIAL_STATE__.events)).$mount('#app');
