// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Xr3dmoIFsn0dcZtlB0UNWJkyaaEPtDg",
  authDomain: "web-platform-3191f.firebaseapp.com",
  databaseURL: "https://web-platform-3191f-default-rtdb.firebaseio.com",
  projectId: "web-platform-3191f",
  storageBucket: "web-platform-3191f.appspot.com",
  messagingSenderId: "724728944259",
  appId: "1:724728944259:web:dc49c9e50e02696a1b2db6",
  measurementId: "G-C2BWMES5S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);