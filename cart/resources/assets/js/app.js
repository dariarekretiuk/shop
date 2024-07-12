require('./bootstrap');
import Vue from 'vue';
window.Vue = require('vue');

import products from './components/ProductsList.vue';
import cart from './components/Cart.vue';
import store from './store.js';

Vue.component('products', require('./components/ProductsList.vue'));
Vue.component('cart', require('./components/Cart.vue'));

const app = new Vue({
    el: '#app',
    components: {
        'cart': require('./components/Cart.vue'),
        'products': require('./components/ProductsList.vue')
    }
});



new Vue({
    el: '#app',

    store: new Vuex.Store(store),
    //cart: new Vuex.Store(cart),
    //products: new Vuex.Store(products)
});




