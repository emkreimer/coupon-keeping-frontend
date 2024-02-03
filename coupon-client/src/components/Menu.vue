<script setup lang="ts">
import { ref } from "vue";
import ProductList from "./product/ProductList.vue";
import CustomerList from "./customers/CustomerList.vue";
const tab = ref(null);
const tabs = [
  {
    nome: "Produtos",
    componente: ProductList,
  },
  {
    nome: "Clientes",
    componente: CustomerList,
  },
];
</script>
<template>
  <VCard>
    <VTabs v-model="tab" align-tabs="center">
      <VTab v-for="(t, index) in tabs" :key="index" :value="t.nome">
        {{ t.nome }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem v-for="(t, index) in tabs" :key="index" :value="t.nome">
          <Component :is="t.componente" />
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
