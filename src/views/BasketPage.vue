<template>
    <div class="page basket-page">
        <items-list :items="items">
            <template slot="empty">
                <h1>Your basket is empty.</h1>
            </template>
        </items-list>
    </div>
</template>

<script>
import ItemsList from '@/components/ItemsList';

export default {
  name: 'BasketPage',
  components: {
    ItemsList,
  },
  computed: {
    items() {
      return this.$store.get('itemsData', this.$store.get('basket/items'));
    },
  },
};
</script>

<style>

</style>
