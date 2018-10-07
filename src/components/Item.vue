<template>
    <div class="item" @click="toggleDetails">
        <div v-if="!isInBasket"
             class="button button_basket-action button_basket-add"
             @click.stop="addToBasket(name)">ADD</div>
        <div v-else
             class="button button_basket-action button_basket-remove"
             @click.stop="removeFromBasket(name)">REMOVE</div>
        <div class="item__name">{{ name }}</div>
        <div class="item__price">{{ price.toFixed(2) }}$</div>
        <div class="item__details" v-show="showDetails">
            <div>Model: {{ model }}</div>
            <div>Passengers: {{ passengers }}</div>
            <div>Consumables: {{ consumables }}</div>
        </div>
    </div>
</template>

<script>
import { call } from 'vuex-pathify';

export default {
  name: 'Item',
  props: {
    name: String,
    price: Number,
    model: String,
    passengers: String,
    consumables: String,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    isInBasket() {
      return this.$store.get('basket/has', this.name);
    },
  },
  methods: {
    addToBasket: call('basket/add'),
    removeFromBasket: call('basket/remove'),
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style>
.item {
    border: 1px solid silver;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
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
