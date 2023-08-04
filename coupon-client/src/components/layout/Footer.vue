<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between py-2">
        <div class="col-3">
          <div>
            <ul class="list-unstyled">
              <router-link to="/"><li>About Us</li></router-link>
              <router-link to="/"><li>Contact Us</li></router-link>
            </ul>
          </div>
        </div>

        <div class="col-3">
          <div>
            <ul class="list-unstyled">
              <router-link to="/"><li>Featured</li></router-link>
              <router-link to="/"><li>Catalog</li></router-link>
            </ul>
          </div>
        </div>
        <div class="list-unstyled col-6">
          <div>
            <h6>Rua dos Bobos, Nº 0,</h6>
            <a href="#">example@example.com</a>
            <h6 class="py-2">+55 (84)XXXXX-XXXX</h6>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div>
          <p>Copyright © All Rights Reserved 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
.footer_area {
  position: relative;
  z-index: 1;
  color: #2c3539;
  background-color: #fefefe;
}

.list-unstyled a {
  text-decoration: none;
}

.list-unstyled a li {
  color: #2c3e50;
  margin-bottom: 5px;
}
</style>
