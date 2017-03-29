import FirebaseApi from '@/api/firebase.js';
import * as types from '@/store/mutation-types.js';

const mutations = {
    [types.ADD_RECORD] (state, { record }) {
        console.log('record added', record);
    },
    [types.SET_TAGS] (state, { tags }) {
        state.tags = tags;
    },
    [types.AUTH_LOGOUT] (state) {
        state.user = null;
    },
    [types.AUTH_LOGIN] (state, { user }) {
        state.user = user;
    }
}

export default mutations;
