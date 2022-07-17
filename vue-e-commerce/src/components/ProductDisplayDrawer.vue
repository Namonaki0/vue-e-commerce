<template>
    <div class="product-drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"/>

    <div class="product-drawer" :class="{show: active}">
        <div class="close-product-drawer" @click="$emit('close-product-drawer')">
            X
        </div>
        <div v-if="product" class="product-details">
            <h2>{{product.name}}</h2>
            <p>{{product.description}}</p>
            <p>{{product.price.toFixed(2)}}</p>
            <div class="cart-total">
                <h3>Quantity</h3>
                <h4>{{product_count}}</h4>
            </div>
            <div class="buttons-container">
                <button class="add-item">add</button>
                <button class="remove-item">remove</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["product", "active"],
    computed: {
        product_total() {
            return 1000
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

</style>