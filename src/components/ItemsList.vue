<template>
    <div class="item-list">
        <item v-for="item in items" v-bind="item" :key="item.name" />
    </div>
</template>

<script>
import Item from '@/components/Item';

export default {
  name: 'ItemsList',
  components: {
    Item,
  },
  props: {
    items: Array,
  },
};
</script>

<style>
.item-list {
    display: flex;
    flex-direction: column;
}
</style>
