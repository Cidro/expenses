<template>
    <div class="auth-view-component">
        <button-google-login :click-handler="handleLoginBtnClick"></button-google-login>
    </div>
</template>
<script>
import ButtonGoogleLogin from '@/components/buttons/GoogleLogin';

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'AuthComponent',
    components: {
        ButtonGoogleLogin
    },
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
