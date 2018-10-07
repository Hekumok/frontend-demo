<template>
    <div class="nav">
        <router-link to="/">Mainpage</router-link>
    </div>
</template>

<script>
export default {
  name: 'TopMenu',
};
</script>

<style scoped>
.nav {
    padding: 30px;
}

.nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav a.router-link-exact-active {
    color: #42b983;
}
</style>
