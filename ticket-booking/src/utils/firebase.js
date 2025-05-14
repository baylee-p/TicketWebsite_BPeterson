import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAw2tQ6B0iPkRwQ538XSCzLYySObAfb7Gg",
    authDomain: "ticketeer-a8a89.firebaseapp.com",
    projectId: "ticketeer-a8a89",
    storageBucket: "ticketeer-a8a89.firebasestorage.app",
    messagingSenderId: "512715778059",
    appId: "1:512715778059:web:9da844ec93f83db77dff0e",
    measurementId: "G-HM6JXBSS52"
  };  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
