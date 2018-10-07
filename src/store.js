import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import root from '@/store/root';
import basket from '@/store/basket';

Vue.use(Vuex);
const store = new Vuex.Store({
  ...root,
  plugins: [pathify.plugin],
  modules: {
    basket,
  },
});

export default store;
