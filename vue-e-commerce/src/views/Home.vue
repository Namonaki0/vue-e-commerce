<template>
  <div>
    <h2>Home</h2>

    <div class="products-card-container">
      <ProductSummaryCard 
        v-for="(product, index) in products" 
        :key="index"
        :product="product"
        />

    </div>
  </div>
</template>

<script>

import products from '@/data/products'
import ProductSummaryCard from '@/components/ProductSummaryCard.vue'

export default {
  name: 'HomeComponent',

  components: {
    ProductSummaryCard
  },

  data() {
    return {
      products: products
    }
}
}


</script>

