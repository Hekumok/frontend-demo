export default {
  getRandom(min = 0, max = 1) {
    return (Math.random() * (max - min)) + min;
  },
  generatePrice() {
    return this.getRandom(1000, 10000).toFixed(2);
  },
};
