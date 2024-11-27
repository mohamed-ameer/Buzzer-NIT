// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdgktA8tuXIjzX60qnXOt4DnVZ2g9VL5Q",
  authDomain: "buzzer-323a8.firebaseapp.com",
  projectId: "buzzer-323a8",
  storageBucket: "buzzer-323a8.firebasestorage.app",
  messagingSenderId: "742678372634",
  appId: "1:742678372634:web:c8469019ce75873d404ca3"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export {auth};