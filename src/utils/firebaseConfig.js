// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBld6EF88_GqMf_rIGA-QuGhSE1dcidvgM",
  authDomain: "watchflix-458a8.firebaseapp.com",
  projectId: "watchflix-458a8",
  storageBucket: "watchflix-458a8.appspot.com",
  messagingSenderId: "22917277619",
  appId: "1:22917277619:web:cab4b24f7297f49cf88dc6",
  measurementId: "G-W9809MTTKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();