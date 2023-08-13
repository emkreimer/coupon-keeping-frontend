<template>
  <div class="container-flex">
    <nav class="navbar navbar-light">
      <a class="navbar-brand py-0 pl-5">
        <img width="50" height="50" />
      </a>
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link to="/">Home</router-link>
        <router-link class="px-4" to="/">Prop</router-link>
        <router-link to="/">Prop 1</router-link>
      </span>
      <p class="navbar-item ml-auto"></p>
      <div class="searc d-none d-xl-block d-lg-block px-4">
        <input type="search" class="search form-control" />
      </div>
      <div class="user">
        <h5 style="cursor: pointer">Sign In</h5>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss">
nav {
  z-index: 100;
}
.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
}

.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.btn-sm {
  border-radius: 0;
}

.user {
  margin-right: 20px;
  padding-top: 10px;
}

.user:hover {
  text-decoration: underline;
}
</style>
