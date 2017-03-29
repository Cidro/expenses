<template>
    <div class="base-view-component">
        <div class="row" v-if="user">
            <div class="col-xs-6">
                <h5>{{ user.displayName }}</h5>
            </div>
            <div class="col-xs-6 text-right">
                <a class="btn btn-danger" @click.prevent="logout">Logout</a>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <template v-if="loading" class="loading">
                    <div class="alert alert-warning text-center">Loading...</div>
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
            logout: 'logout',
            setUser: 'setUser'
        })
    }
}
</script>
