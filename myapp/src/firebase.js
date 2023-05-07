// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8-IBVVNHFA4AKGGb99AyQg1HILG2HgB0",
  authDomain: "todoapp-23435.firebaseapp.com",
  projectId: "todoapp-23435",
  storageBucket: "todoapp-23435.appspot.com",
  messagingSenderId: "254409476274",
  appId: "1:254409476274:web:4c4f5c1511ef0856e9e1ab",
  measurementId: "G-QNTTSZ06QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
