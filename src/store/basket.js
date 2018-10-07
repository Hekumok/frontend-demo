import { make } from 'vuex-pathify';

const state = {
  items: [],
};

const getters = {
  ...make.getters(state),
  has(state) {
    return item => state.items.indexOf(item) !== -1;
  },
};

const mutations = {
  ADD_ITEM(state, item) {
    if (state.items.indexOf(item) === -1) {
      state.items.push(item);
    }
  },
  REMOVE_ITEM(state, name) {
    const index = state.items.indexOf(name);

    if (index !== -1) {
      state.items.splice(index, 1);
    }
  },
};

const actions = {
  add({ commit }, payload) {
    commit('ADD_ITEM', payload);
  },
  remove({ commit }, payload) {
    commit('REMOVE_ITEM', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
