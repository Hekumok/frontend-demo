export default {
  getRandom(min = 0, max = 1) {
    return (Math.random() * (max - min)) + min;
  },
  generatePrice() {
    return +this.getRandom(1000, 10000).toFixed(2);
  },
  getFormattedDate(date) {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${dd}/${mm}/${y}`;
  },
};
