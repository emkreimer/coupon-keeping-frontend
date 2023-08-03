<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <a href="#" class="active">Home</a>
      <a href="#">Prop 1</a>
      <a href="#">Prop 2</a>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss">
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 999;
}

.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 18px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
