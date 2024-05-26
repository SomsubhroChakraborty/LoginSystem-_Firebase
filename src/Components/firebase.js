// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaREo1xnACfdrTR6x7wqdzHr871zhn_v4",
  authDomain: "login-auth-184c6.firebaseapp.com",
  projectId: "login-auth-184c6",
  storageBucket: "login-auth-184c6.appspot.com",
  messagingSenderId: "736172250615",
  appId: "1:736172250615:web:83f55db48115e20170caf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
