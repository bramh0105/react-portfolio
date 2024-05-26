
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDw5IySs6CKsrBJyemGwoF0PlSnEmDvP1I",
  authDomain: "portfolio-2b338.firebaseapp.com",
  projectId: "portfolio-2b338",
  storageBucket: "portfolio-2b338.appspot.com",
  messagingSenderId: "129398189134",
  appId: "1:129398189134:web:46fbab5e116bd2a85d671f",

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);