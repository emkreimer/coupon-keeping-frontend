<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

const fields = ref([
  { key: 'label', label: 'Nome' },
  { key: 'price', label: 'Preço' },
  { key: 'supply', label: 'Estoque' }
])

const page = ref({
  nPage: 1,
  size: 10,
  total: 0,
  products: []
})

onMounted(() => {
  axios.get('http://localhost:8080/coupons/product/list').then((res) => {
    page.value.products = res.data
  })
})
</script>

<template>
  <div>
    <Navbar />
    <router-view :products="page.products" :fields="fields"></router-view>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Exo+2');
#app {
  display: block !important;
  background-color: #f8f8f8 !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
