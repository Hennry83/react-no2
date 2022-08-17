// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPzxspaShW4IcWFirdOsOX4efq0Jjpx6w",
  authDomain: "ecommerce-no2.firebaseapp.com",
  projectId: "ecommerce-no2",
  storageBucket: "ecommerce-no2.appspot.com",
  messagingSenderId: "398239575132",
  appId: "1:398239575132:web:ac54cb863d89a285b48a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db