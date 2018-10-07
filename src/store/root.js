import ItemsApi from '@/services/api/Items';
import utils from '@/utils';

const state = {
  itemsData: [],
};

const getters = {
  items(state) {
    return state.itemsData.map(item => item.name);
  },
  itemData(state) {
    return name => state.itemsData.find(item => item.name === name);
  },
  itemsData(state) {
    return items => state.itemsData.filter(item => items.includes(item.name));
  },
};

const mutations = {
  ADD_ITEMS(state, items) {
    state.itemsData.push(...items);
  },
};

const actions = {
  loadItems({ dispatch }) {
    return ItemsApi.getItems()
      .then(items => dispatch('addNewItems', items));
  },
  addNewItems({ getters, commit }, items) {
    const newItems = items.filter(item => !getters.items.includes(item.name));

    newItems.forEach((item) => {
      item.price = utils.generatePrice();
    });

    commit('ADD_ITEMS', newItems);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
