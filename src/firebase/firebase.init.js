import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiUDHSwIYSgY-fzmV0WYlk6xRN4P2imsM",
  authDomain: "coffee-store-b4f5e.firebaseapp.com",
  projectId: "coffee-store-b4f5e",
  storageBucket: "coffee-store-b4f5e.firebasestorage.app",
  messagingSenderId: "314537380256",
  appId: "1:314537380256:web:c204150e0ce9557f6a3cc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
