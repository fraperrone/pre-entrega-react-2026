// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0z0R4sAkbyIajZHmcb2ZXROm4lQ2BL8",
  authDomain: "react2026-446b0.firebaseapp.com",
  projectId: "react2026-446b0",
  storageBucket: "react2026-446b0.firebasestorage.app",
  messagingSenderId: "142588524896",
  appId: "1:142588524896:web:1c11ca8e45a8f167670605",
  measurementId: "G-W6V11LTSRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);