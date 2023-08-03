<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

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
  <router-view :products="page.products" :fields="fields"></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
}
</style>
