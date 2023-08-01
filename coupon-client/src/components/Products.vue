<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col">heyy</div>
      <div class="col" v-for="product in products" :key="product.id">teste</div>
      <div class="col">heyy</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Products',
  props: ['products']
}
</script>
