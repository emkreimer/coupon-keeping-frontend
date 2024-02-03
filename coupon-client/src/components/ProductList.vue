<script setup lang="ts">
import { onMounted } from "vue";
import { listProducts } from "../services/productService";

onMounted(() => {
  listProducts();
});
</script>

<template>
  <div>heyy</div>
</template>
