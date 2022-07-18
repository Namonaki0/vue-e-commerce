<template>
  <div>
    <h2>Home</h2>

    <div class="products-card-container">
      <ProductSummaryCard v-for="product in products" :key="product.id" :product="product"
        v-on:view-product="viewProduct($event)" />
      <ProductDisplayDrawer :product="product" :active="active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer()" />

    </div>
  </div>
</template>

<script>

import products from '@/data/products'
import ProductSummaryCard from '@/components/ProductSummaryCard.vue'
import ProductDisplayDrawer from "@/components/ProductDisplayDrawer.vue"

export default {
  name: 'HomeComponent',

  components: {
    ProductSummaryCard,
    ProductDisplayDrawer
  },

  data() {
    return {
      products: products,
      product: null,
      active: {
        product_drawer: false
      }
    }
},
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    }
  },
}


</script>

