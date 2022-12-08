// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDOyizpDzaPqcaguiZWcJ-J-YlAO_RxHJ0",
  authDomain: "eshop-a93b5.firebaseapp.com",
  projectId: "eshop-a93b5",
  storageBucket: "eshop-a93b5.appspot.com",
  messagingSenderId: "857792599601",
  appId: "1:857792599601:web:b84d7e08a60a5b10e66710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
