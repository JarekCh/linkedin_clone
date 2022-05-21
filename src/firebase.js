import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDGjkAUSX-W1800r2LDTf7QlDPxNYejbks",
  
    authDomain: "linkedin-clone-79277.firebaseapp.com",
  
    projectId: "linkedin-clone-79277",
  
    storageBucket: "linkedin-clone-79277.appspot.com",
  
    messagingSenderId: "88700237499",
  
    appId: "1:88700237499:web:15f1bbe3a42eb785971b9e",
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};