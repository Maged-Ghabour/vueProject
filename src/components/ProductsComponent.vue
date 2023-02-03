<template>
    <div v-cloak>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-5  g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card h-100">
                    <router-link class="text-decoration-none" :to="'/products/' + product.id">
                        <img :src="product.image" class="card-img-top" :alt="product.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-text">{{ product.description }}</p>
                        </div>
                    </router-link>
                    <div class="card-footer d-flex justify-content-between align-items-baseline">
                        <p
                            :class="[product.instock == 0 ? 'stockEqual' : '', product.instock <= 5 ? 'stockLess' : '', product.instock > 5 ? 'stockmore' : '']">
                            Stock : {{ product.instock }}</p>
                        <button :disabled="product.instock == 0" class="btn btn-success" @click="product.instock--">Add
                            To
                            Cart</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="m-2 text-center row rounded shadow p-5 d-flex justify-content-center align-items-center">
            <h2 class="empty">You're Cart is Empty Plz Enter any Carts .🙅‍♂️</h2>
        </div>
    </div>
</template>

<script>
import { products } from "./products";

export default {
    data() {
        return {
            products: products
        }
    },
}
</script>

<style scoped>
[v-cloak] {
    display: none;
}

.col a {
    color: initial;
    /* cursor: url("../assets/cursor.png"), auto; */
}

.stockLess {
    color: orange;
    font-weight: bold;
}

.empty {
    color: #007876;
}

.stockEqual {
    color: indianred;
    font-weight: bold;
}

.stockmore {
    color: green;
    font-weight: bold;
}
</style>