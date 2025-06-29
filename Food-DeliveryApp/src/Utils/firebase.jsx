// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDE8lcdf2N1R3_k72_kotHxbPEcfAhE0M",
  authDomain: "food-delivery-app-3a9b7.firebaseapp.com",
  projectId: "food-delivery-app-3a9b7",
  storageBucket: "food-delivery-app-3a9b7.firebasestorage.app",
  messagingSenderId: "995485273341",
  appId: "1:995485273341:web:9cf1d9515a31f255870294",
  measurementId: "G-CVL76HLZF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();