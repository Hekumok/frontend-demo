<template>
    <div :class="classList">
        <template v-if="hasItems">
            <item v-for="item in items" v-bind="item" :key="item.name" />
        </template>
        <slot name="empty" v-else><h1>Sorry, all items was sold.</h1></slot>
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
  computed: {
    hasItems() {
      return this.items.length > 0;
    },
    classList() {
      return {
        'items-list': true,
        'empty-list': !this.hasItems,
      };
    },
  },
};
</script>

<style>
.items-list {
    display: flex;
    flex-direction: column;
}
</style>
