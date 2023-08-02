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
  axios.get('http://localhost:8080/coupons/product/list').then((res) => {
    console.log(res.data)
    page.value.products = res.data
  })
})
</script>

<template>
  <router-view :products="page.products"></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
