// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRzLaGv6JCfTGf9JzaKxsv8RyCEWVDJ_s",
  authDomain: "e-commerce-mern-e5427.firebaseapp.com",
  projectId: "e-commerce-mern-e5427",
  storageBucket: "e-commerce-mern-e5427.appspot.com",
  messagingSenderId: "769545972003",
  appId: "1:769545972003:web:02bb91c5ada6b5fff00496",
  measurementId: "G-ZSE6CJ2HQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);