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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;