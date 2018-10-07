import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://swapi.co/api';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
