// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdqN-s3BuWBwj8pLQCGAVjEz-jT3cqCWQ",
  authDomain: "twitter-clone-a97df.firebaseapp.com",
  projectId: "twitter-clone-a97df",
  storageBucket: "twitter-clone-a97df.appspot.com",
  messagingSenderId: "429455607538",
  appId: "1:429455607538:web:52aade8208ee0e48f5726b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
