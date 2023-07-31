<template>
  <div class="container mx-auto">
    <container fluid>
      <b-row dense>
        <b-col
          v-for="item in products"
          :key="item.id"
          cols="12"
          xs="6"
          sm="4"
          md="3"
          lg="2"
        ></b-col>
      </b-row>
    </container>
  </div>
</template>
<script>
export default {
  name: 'Products',
  props: ['products']
}
</script>
