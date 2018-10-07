<template>
    <div class="page basket-page">
        <items-list :items="items">
            <h1 slot="empty">Your basket is empty.</h1>
        </items-list>
        <template v-if="hasItems">
            <h3 class="bsket-page__total-price">Total: {{ itemsTotalPrice.toFixed(2) }}$</h3>
            <div class="button button_show-popup" @click="showModal = true">CREATE ORDER</div>
            <modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">Order data</h3>
                <order slot="body"></order>
            </modal>
        </template>
    </div>
</template>

<script>
import ItemsList from '@/components/ItemsList';
import Modal from '@/components/Modal';
import Order from '@/components/Order';

export default {
  name: 'BasketPage',
  components: {
    ItemsList,
    Modal,
    Order,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    items() {
      return this.$store.get('itemsData', this.$store.get('basket/items'));
    },
    hasItems() {
      return this.items.length > 0;
    },
    itemsTotalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
};
</script>

<style>
.button_show-popup {
    background-color: lawngreen;
    display: inline-block;
}
</style>
