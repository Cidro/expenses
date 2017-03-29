<template>
    <div class="auth-view-component">
        <div class="text-center">
            <button class="btn btn-success" @click="handleLoginBtnClick">Login</button>
        </div>
    </div>
</template>
<script>

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'AuthComponent',
    methods: {
        handleLoginBtnClick() {
            this.login({
                router: this.$router
            });
        },
        ...mapActions({
            login: 'login'
        })
    }
}
</script>
