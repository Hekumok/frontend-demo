<template>
    <div class="item">
        <div class="item__name">{{ name }}</div>
        <div class="item__price">{{ price }}$</div>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    name: String,
    price: String,
  },
};
</script>

<style>
.item {
    border: 1px solid silver;
    padding: 5px;
    margin: 5px;
}
</style>
