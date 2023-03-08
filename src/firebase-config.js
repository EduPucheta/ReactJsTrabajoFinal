// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, 
  authDomain: "azua-eeed1.firebaseapp.com",
  projectId: "azua-eeed1",
  storageBucket: "azua-eeed1.appspot.com",
  messagingSenderId: "179603653647",
  appId: "1:179603653647:web:7ae80f72dc61cc87264f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

