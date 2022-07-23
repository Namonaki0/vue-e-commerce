<template>
    <div class="product-drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')" />

    <div class="product-drawer" :class="{show: active}">
        <div class="close-product-drawer">
            <span class="close-product-drawer-icon" @click="$emit('close-product-drawer')">
                X
            </span>
        </div>
        <div class="product-details" v-if="product">
            <img :src="product.image" />
            <h2>{{product.name}}</h2>
            <p>{{product.description}}</p>
            <p>{{product.price.toFixed(2)}}</p>

            <div class="cart-total" v-if="product_count">
                <h3>Quantity</h3>
                <h4>{{product_count}}</h4>
            </div>
            <div class="buttons-container">
                <button class="add-item p-2 m-2 max-auto m-auto text-white bg-black" @click="addToCart()">add</button>
                <button class="remove-item p-2 m-2 max-auto m-auto text-white bg-black">remove</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["product", "active"],
    methods: {
        addToCart() {
            this.$store.commit("addToCart", this.product)
        }
    },
    computed: {
        product_count() {
            return this.$store.getters.productQuantity(this.product)
        }
        
    }
}
</script>

<style scoped>





.product-drawer-background {
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: grey;
    z-index: 100;
    transition: all 150ms linear;
}

.product-drawer-background.show {
    display: block;
}

.product-drawer {
    width: 95vw;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: -100vw;
    transition: all 150ms linear;
    z-index: 110;
    overflow-y: scroll;
}

.product-drawer.show {
    left: 0;
}

.close-product-drawer {
    background: #1c1c1c;
    text-align: right;
    padding: .1rem 1rem;
    font-size: 2rem;
}

.close-product-drawer-icon {
    color: white;
    cursor: pointer;
}


</style>