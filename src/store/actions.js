import firebase from 'firebase';
import FirebaseApi from '@/api/firebase';

import * as types from '@/store/mutation-types.js';

export const addRecord = ({ commit, state }, record) => {
    FirebaseApi.push('record', record).then((response) => {
        commit(types.ADD_RECORD, { record });
    });

    if (record.tags.length) {
        let newTags = []
        Promise.all(record.tags.map((tag) => {
            if (state.tags.indexOf(tag) < 0) {
                newTags.push(tag);
                return FirebaseApi.push('tags', tag);
            }
            return null;
        })).then((response) => {
            commit(types.SET_TAGS, {
                tags: state.tags.concat(newTags)
            })
        });
    }
};

export const fetchTags = ({ commit }) => {
    FirebaseApi.get('tags').then((response) => {
        let tags = [],
            values = response.val();
        for (var t in values) {
            tags.push(values[t]);
        }
        commit(types.SET_TAGS, { tags });
    });
};

export const logout = ({ commit }) => {
    firebase.auth().signOut()
        .then(function () {
            commit(types.AUTH_LOGOUT);
        }, function (error) {
            console.log('auth logout error');
        });
}

export const login = ({ commit }, { router }) => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((response) => {
            console.log('success auth', response);
            commit(types.AUTH_LOGIN, { user: response.user });
            router.replace({ name: 'Home' });
        })
        .catch((response) => {
            console.log('auth error', response);
        })
}

export const setUser = ({ commit }, { user, router }) => {
    commit(types.AUTH_LOGIN, { user });
    router.replace({ name: 'Home' });
}
