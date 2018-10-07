<template>
    <div class="nav">
        <router-link to="/">Mainpage</router-link>
        <router-link to="/basket">
            <basket />
        </router-link>
    </div>
</template>

<script>
import Basket from '@/components/Basket';

export default {
  name: 'TopMenu',
  components: {
    Basket,
  },
};
</script>

<style scoped>
.nav {
    padding: 15px;
    display: flex;
}

.nav a {
    border: 1px solid silver;
    font-weight: bold;
    color: #2c3e50;
    margin: 15px;
    padding: 15px;
    text-decoration: none;
}

.nav a.router-link-exact-active {
    color: #42b983;
}
</style>
