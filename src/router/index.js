import Vue from 'vue';
import VueRouter from 'vue-router';

import Base from '@/views/Base';
import Home from '@/views/Home';
import Auth from '@/views/Auth';

import firebase from 'firebase';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        component: Base,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    }
]

export default new VueRouter({
    routes
})
