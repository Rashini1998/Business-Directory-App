// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiLJZZx0rmcbWc9bGeJHqf-SLW1K3e48E",
  authDomain: "projects-bb966.firebaseapp.com",
  projectId: "projects-bb966",
  storageBucket: "projects-bb966.appspot.com",
  messagingSenderId: "230850881756",
  appId: "1:230850881756:web:02e2e25b97ccac394b6c19",
  measurementId: "G-Z1NY1HT2Q6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);