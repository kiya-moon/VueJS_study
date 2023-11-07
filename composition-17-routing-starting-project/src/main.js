import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AddProduct from './pages/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    // 예를 들어, ProductDetails 페이지는 /products를 로드하고, 동적 세그먼트(:pid)를 로드
    { path: '/products/:pid', component: ProductDetails },
    { path: '/products/add', component: AddProduct }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
