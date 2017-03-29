import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store';


/* eslint-disable no-new */
new Vue({
    name: 'Expenses',
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    router,
    store
});
