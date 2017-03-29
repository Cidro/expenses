import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from '@/store/actions.js';
import * as getters from '@/store/getters.js';
import mutations from '@/store/mutations.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tags: [],
        messages: [],
        user: null
    },
    mutations,
    actions,
    getters
});
