<template>
    <div class="base-view-component">
        <main-nav :user="user"></main-nav>
        <div class="row">
            <div class="col-xs-12">
                <template v-if="loading" class="loading">
                    <div class="text-center alert alert-info">Loading...</div>
                </template>
                <template v-else>
                    <router-view></router-view>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';

import {
    mapGetters,
    mapActions
} from 'vuex';

import MainNav from '@/components/MainNav';

export default {
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setUser({
                    user,
                    router: this.$router
                });
                this.loading = false;
            } else {
                this.$router.replace({
                    name: 'Auth'
                });
            }
        });
    },
    components: {
        MainNav
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        ...mapGetters({
            'user': 'authUser'
        })
    },
    methods: {
        ...mapActions({
            setUser: 'setUser'
        })
    }
}
</script>
