import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgmQ-DWa5XuWAwy5ivzCIrE-Lja72rXpM",
    authDomain: "crwn-clothing-shop.firebaseapp.com",
    databaseURL: "https://crwn-clothing-shop.firebaseio.com",
    projectId: "crwn-clothing-shop",
    storageBucket: "crwn-clothing-shop.appspot.com",
    messagingSenderId: "144497809767",
    appId: "1:144497809767:web:1c09ab39e8de687d38b7c2",
    measurementId: "G-MDTT2NCV23"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;