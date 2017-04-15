<template>
    <div class="main-nav-component">
        <div class="row" v-if="user">
            <div class="col-xs-6">
                <h5>{{ user.displayName }}</h5>
            </div>
            <div class="col-xs-6">
                <a class="btn btn-danger pull-right" @click.prevent="logout">Logout</a>
            </div>
        </div>
    </div>
</template>
<script>

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    methods: {
        ...mapActions({
            logout: 'logout'
        })
    }
}
</script>
