import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrfoWE_w2fJ7nzE15Jhw8WTZEOZ1-bdxo",
    databaseURL: "https://colecionaveisfb-d7ea9.firebaseio.com",
    authDomain: "colecionaveisfb-d7ea9.firebaseapp.com",
    projectId: "colecionaveisfb-d7ea9",
    storageBucket: "colecionaveisfb-d7ea9.appspot.com",
    messagingSenderId: "130588914648",
    appId: "1:130588914648:web:bb8215141d32c5b12438ad",
    measurementId: "G-VKM7GYV6WX"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();