// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1RzGKUh-_TAHL3lYyd9JpRyf5yF0jZvo",
  authDomain: "ema-john-115c8.firebaseapp.com",
  projectId: "ema-john-115c8",
  storageBucket: "ema-john-115c8.appspot.com",
  messagingSenderId: "507184411881",
  appId: "1:507184411881:web:7edfd3ecf1a1abb8662c78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;