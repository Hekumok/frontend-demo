import axios from 'axios';

export default {
  getItems() {
    return axios.get('/starships')
      .then(response => response.data.results);
  },
};
