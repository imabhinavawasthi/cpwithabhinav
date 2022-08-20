// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqwUfeRT7BuJStQYm9XzAsH4lqQprsdRY",
  authDomain: "crack-dsa.firebaseapp.com",
  projectId: "crack-dsa",
  storageBucket: "crack-dsa.appspot.com",
  messagingSenderId: "635785378390",
  appId: "1:635785378390:web:20ad704c35a08ea2e9d9f7",
  measurementId: "G-NZLJ7SEHTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);