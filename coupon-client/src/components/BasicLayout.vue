<template>
  <div class="app">
    <Navbar class="comp" />
    <main>
      <slot name="content"></slot>
    </main>
    <Footer class="comp"></Footer>
  </div>
</template>
<script>
import Navbar from './layout/Navbar.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'BasicLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  background-color: #f5f5dc;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.comp {
  color: #f2f2f2;
  background-color: #964b00;
  display: flex;
  width: 100%;
}
</style>
