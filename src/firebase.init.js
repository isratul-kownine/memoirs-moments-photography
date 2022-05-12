// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq0cuVVgXmTaQT96Mc1A5HczWfYBNM4_I",
  authDomain: "memoirs-moments-photography.firebaseapp.com",
  projectId: "memoirs-moments-photography",
  storageBucket: "memoirs-moments-photography.appspot.com",
  messagingSenderId: "657104585960",
  appId: "1:657104585960:web:2af607a63d813c8c11f55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;