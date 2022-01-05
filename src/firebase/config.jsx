import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp (  {
    apiKey: "AIzaSyABAnM3Vs_RJ4O_Tf98ulkNxyNMBQV4gUo",
    authDomain: "smart-tools-8bbee.firebaseapp.com",
    projectId: "smart-tools-8bbee",
    storageBucket: "smart-tools-8bbee.appspot.com",
    messagingSenderId: "989313668761",
    appId: "1:989313668761:web:aa61f075e42627ebfd0a08"
})

export default app