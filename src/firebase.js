import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBTdi6B19O592DNXlk7pMpPrxxMlfzjhyc", //'AIzaSyBTdi6B19O592DNXlk7pMpPrxxMlfzjhyc',
    authDomain: "webit-b8e79.firebaseapp.com",
    projectId: "webit-b8e79",
    storageBucket: "webit-b8e79.appspot.com",
    messagingSenderId: "318521714266",
    appId: "1:318521714266:web:43b2b32932e13b04969a63",
    measurementId: "G-P8X24CFKP6"
  };
  
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
// const storage = getStorage(app);


export {auth, provider};
export default db;