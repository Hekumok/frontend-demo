<template>
    <div class="basket">Basket
        <div class="basket__counter">{{ itemsCount }} items</div>
        <div class="basket__total-price">{{ itemsTotalPrice.toFixed(2) }}$</div>
    </div>
</template>

<script>
import { get } from 'vuex-pathify';

export default {
  name: 'Basket',
  computed: {
    items: get('basket/items'),
    itemsCount() {
      return this.items.length;
    },
    itemsTotalPrice() {
      return this.$store.get('itemsData', this.items)
        .reduce((sum, item) => sum + item.price, 0);
    },
  },
};
</script>

<style>

</style>
