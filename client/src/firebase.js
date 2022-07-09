// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKZPsCU6vwQjF0gbtILeftASGO4ZdmFI",
  authDomain: "mindfulness-faa7b.firebaseapp.com",
  projectId: "mindfulness-faa7b",
  storageBucket: "mindfulness-faa7b.appspot.com",
  messagingSenderId: "913483741739",
  appId: "1:913483741739:web:ab373a8af35c7d9aa2086e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
