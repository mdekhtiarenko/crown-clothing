import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

export const createUserProfileInFirebase = async (user, additionalUserInfo) => {
    if (!user) return;

    const userRef = firestore.doc(`/users/${user.uid}`);

    let userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const {displayName, email} = user;
        const createdAt = new Date();

        await userRef.set({displayName, email, createdAt, ...additionalUserInfo})
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (collectionName, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionName);
    const butch = firestore.batch();
    objectsToAdd.forEach(object => {
        const docRef = collectionRef.doc();
        butch.set(docRef, object);
    });
    return await butch.commit();
};


export const checkIfUserSessionIsActive = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject)
    })
}

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
