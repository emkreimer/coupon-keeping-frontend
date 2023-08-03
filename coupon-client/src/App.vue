<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Layout from './components/BasicLayout.vue'

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
  <Layout>
    <template v-slot:content>
      <div id="app">
        <router-view :products="page.products" :fields="fields"></router-view>
      </div>
    </template>
  </Layout>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app {
  // height: 100%;
  // margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
