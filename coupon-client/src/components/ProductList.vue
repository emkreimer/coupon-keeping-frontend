<script setup lang="ts">
import { onMounted, ref } from "vue";
import type Product from "../types/Product";
import { listProducts } from "../services/productService";

const products = ref<Product[]>([]);
onMounted(async () => {
  products.value = await listProducts();
});
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in products" :key="p.id">
        <td>{{ p.label }}</td>
        <td>{{ p.price }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
