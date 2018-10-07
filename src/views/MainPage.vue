<template>
    <div class="page">
        <items-list :items="items" />
    </div>
</template>

<script>
import store from '@/store';
import ItemsList from '@/components/ItemsList';

export default {
  name: 'MainPage',
  components: {
    ItemsList,
  },
  data() {
    return {
      updateTime: 5000,
      timerId: null,
    };
  },
  computed: {
    items() {
      return this.$store.get('itemsData', this.$store.get('items'));
    },
  },
  methods: {
    runUpdateTimer() {
      this.timerId = setTimeout(() => this.updateItems(), this.updateTime);
    },
    updateItems() {
      this.$store.dispatch('loadItems')
        .then(() => {
          if (this.timerId) {
            this.runUpdateTimer();
          }
        });
    },
  },
  created() {
    this.runUpdateTimer();
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('loadItems')
      .then(() => next());
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timerId);
    next();
  },
};
</script>

<style>

</style>
