<template>
  <div class="nav-container px-2 text-xl md:text-2xl uppercase font-medium bg-slate-600 text-white">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/new-in" class="nav-link">New In</router-link>
    <router-link to="/categories" class="nav-link">Categories</router-link>
    <div class="cart-link-container">
      <router-link to="/cart" class="cart-link nav-link">Cart</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>

</script>

<style>
#app {
  font-family: 'Kanit', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  letter-spacing: 1.2px;
}

.nav-link {
  margin: .5rem
}

.cart-link-container {
  flex: 1;
  text-align: right;
  font-weight: 400;
  letter-spacing: 0;
}

</style>
