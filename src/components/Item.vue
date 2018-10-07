<template>
    <div class="item">
        <div v-if="!isInBasket"
             class="button button_basket-action button_basket-add"
             @click="addToBasket(name)">ADD</div>
        <div v-else
             class="button button_basket-action button_basket-remove"
             @click="removeFromBasket(name)">REMOVE</div>
        <div class="item__name">{{ name }}</div>
        <div class="item__price">{{ price }}$</div>
    </div>
</template>

<script>
import { call } from 'vuex-pathify';

export default {
  name: 'Item',
  props: {
    name: String,
    price: String,
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
.button {
    cursor: pointer;
}
.button_basket-action {
    padding: 15px;
    float: right;
}
.button_basket-add {
    background-color: lawngreen;
}
.button_basket-remove{
    background-color: red;
}
</style>
