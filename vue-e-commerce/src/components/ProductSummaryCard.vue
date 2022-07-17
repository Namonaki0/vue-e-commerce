<template>
    <div class="product-card mx-4 bg-slate-300 mb-2 py-4 px-2">
        <div class="product-image-container p-2">
            <img :src="productImage" />
        </div>
        <h2>{{ product.name }}</h2>
        <p class="product-description">DESCRIPTION: {{ productDescription }}</p>
        <p class="product-category">CATEGORY: {{ product.category }}</p>
        <span class="product-price">PRICE: £{{ product.price.toFixed(2) }}</span>
        <button class="block p-2 mt-4 mb-2 max-auto m-auto text-white w-1/2 bg-black" @click="$emit('view-product', product)">view product</button>
    </div>

</template>



<script>

    export default {
        props: ["product"],
        computed: {
            productDescription() {
                return this.product.description.substring(0, 150)
            },
            productImage() {
                return this.product.image;
            }
        }
    }

</script>