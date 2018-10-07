<template>
    <div class="item">
        <div v-if="!isInBasket"
             class="button button_basket-action button_basket-add"
             @click="addToBasket(name)">ADD</div>
        <div v-else
             class="button button_basket-action button_basket-remove"
             @click="removeFromBasket(name)">REMOVE</div>
        <div class="item__name">{{ name }}</div>
        <div class="item__price">{{ price.toFixed(2) }}$</div>
    </div>
</template>

<script>
import { call } from 'vuex-pathify';

export default {
  name: 'Item',
  props: {
    name: String,
    price: Number,
  },
  computed: {
    isInBasket() {
      return this.$store.get('basket/has', this.name);
    },
  },
  methods: {
    addToBasket: call('basket/add'),
    removeFromBasket: call('basket/remove'),
  },
};
</script>

<style>
.item {
    border: 1px solid silver;
    padding: 5px;
    margin: 5px;
}
.button_basket-action {
    float: right;
}
.button_basket-add {
    background-color: lawngreen;
}
.button_basket-remove{
    background-color: red;
}
</style>
