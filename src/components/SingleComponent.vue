<template>
    <template>{{ getProduct($route.params.productId) }}</template>


    <div class="d-flex flex-start" width="250px">

        <img draggable="false" :src="cuurentProduct.image" :alt="cuurentProduct.name">
        <p class="p-2">{{ cuurentProduct.description }}</p>
    </div>


    <div class="row my-2">
        <router-link class="btn btn-primary" to="/products">Back</router-link>
    </div>

    <!-- <div>{{ productId }}</div> -->
</template>


<script>
import { products } from './products';
export default {
    data() {
        return {
            products: products,
            cuurentProduct: null
        }
    }, methods: {
        getProduct(id) {
            for (let i = 0; i <= this.products.length; i++) {
                if (this.products[i].id == id) {
                    this.cuurentProduct = this.products[i];
                    break;
                }
            }
        }
    }
} 
</script>


