<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const page = ref({
  nPage: 1,
  size: 10,
  total: 0,
  products: []
})
onMounted(() => {
  page.products = listProducts()
  console.log(page.products)
})
</script>

<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}

const listProducts = () => {
  axios.get('http://localhost:8080/coupons/product/list').then((res) => {
    return res.data
  })
}
</script>
