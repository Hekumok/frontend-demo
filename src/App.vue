<template>
    <div id="app">
        <top-menu />
        <router-view />
    </div>
</template>

<script>
import TopMenu from '@/components/TopMenu';

export default {
  name: 'App',
  components: {
    TopMenu,
  },
};
</script>

<style>
.button {
    cursor: pointer;
    padding: 15px;
}
</style>
