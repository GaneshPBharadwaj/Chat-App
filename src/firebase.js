import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbef2ifybD6oYiCPq5Ee-BpYg2s55X0E4",
  authDomain: "chatapp-26513.firebaseapp.com",
  projectId: "chatapp-26513",
  storageBucket: "chatapp-26513.appspot.com",
  messagingSenderId: "426767804940",
  appId: "1:426767804940:web:1bfd09980d0f4588e6dc29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();