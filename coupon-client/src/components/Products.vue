<template>
  <div>
    <table class="table table-striped">
      <thead>
        <th v-for="field in fields" :key="field">{{ field.label }}</th>
        <th>Ações</th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td v-for="field in fields" :key="field.key">{{ product[field.key] }}</td>
          <td><i class="fa-thin fa-cart-plus"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Products',
  props: ['products', 'fields']
}
</script>
