import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {process} from "dotenv"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, //'AIzaSyBTdi6B19O592DNXlk7pMpPrxxMlfzjhyc',
    authDomain: "webit-b8e79.firebaseapp.com",
    projectId: "webit-b8e79",
    storageBucket: "webit-b8e79.appspot.com",
    messagingSenderId: "318521714266",
    appId: "1:318521714266:web:43b2b32932e13b04969a63",
    measurementId: "G-P8X24CFKP6"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider, db};