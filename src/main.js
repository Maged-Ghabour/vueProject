import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import ProductsComponent from "./components/ProductsComponent.vue";
import HandleComponent from "./components/HandleComponent.vue";
import SingleComponent from "./components/SingleComponent.vue";


let routes = [
    { path: "/", component: HomeComponent }, 
    { path: "/about", component: AboutComponent }, 
    { path: "/contact", component: ContactComponent },
    { path: "/products", component: ProductsComponent }, 
    { path: "/:catchAll", component: HandleComponent }, 
    {path : "/products/:productId" , props:true , component : SingleComponent}
]

const router = createRouter({history:createWebHistory() , routes})


createApp(App).use(router).mount('#app')
