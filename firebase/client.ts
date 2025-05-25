// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase-admin/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXHQ20wbZUeEC1xO5LsKE0TU3sPTloLJ0",
  authDomain: "prepwise-532f1.firebaseapp.com",
  projectId: "prepwise-532f1",
  storageBucket: "prepwise-532f1.firebasestorage.app",
  messagingSenderId: "971513047808",
  appId: "1:971513047808:web:95bd66d59a7e65bc5261e5",
  measurementId: "G-HHJ53LSHYM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)