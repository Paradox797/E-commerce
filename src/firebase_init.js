// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBow9FD-rnXnfeOMoVlE0HhRoVVgFJMSk4",
    authDomain: "e-commerceserver.firebaseapp.com",
    projectId: "e-commerceserver",
    storageBucket: "e-commerceserver.appspot.com",
    messagingSenderId: "8508816147",
    appId: "1:8508816147:web:0e0dd41616d83dbb74f8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
