<template>
    <div class="header p-2">

        <div class="container d-flex align-items-baseline justify-content-between w-100">
            <h3>Products</h3>
            <div class="container mt-2">
                <ul class="list-group list-group-horizontal justify-content-center">

                    <router-link active-class="active" class="list-group-item" to="/">Home</router-link>
                    <router-link active-class="active" class="list-group-item" to="/about">About</router-link>
                    <router-link active-class="active" class="list-group-item" to="/contact">Contact</router-link>
                    <router-link active-class="active" class="list-group-item" to="/products">Products</router-link>

                </ul>
            </div>

            <p>maged</p>
        </div>
    </div>
</template>

<script>
export default {


}
</script>


<style scoped>
.header {
    background-color: rgb(27, 27, 27);
    color: #fff;
}

.header h3 {
    color: gold;
    font-weight: bold;
}
</style> 