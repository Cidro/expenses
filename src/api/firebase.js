import config from '@/config';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp(config.firebase);

var db = firebaseApp.database();

export default {
    get(refPath) {
        return db.ref(refPath).once('value');
    },
    push(refPath, value){
        return db.ref(refPath).push(value);
    }
}
