import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHyOYxFKiBdTsyya2yRhsUVnbAnNwAaes",
    authDomain: "ecom-react-80308.firebaseapp.com",
    databaseURL: "https://ecom-react-80308.firebaseio.com",
    projectId: "ecom-react-80308",
    storageBucket: "ecom-react-80308.appspot.com",
    messagingSenderId: "29449871295",
    appId: "1:29449871295:web:7ce4c4a379ecc5552a0b0a",
    measurementId: "G-9XY2HFDJQP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;