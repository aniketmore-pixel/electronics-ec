import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
	apiKey: "AIzaSyAPrEV6F7DSxpaPXkQxFqN3Fx7Dss0vao0",
	authDomain: "e-commerce-cb1da.firebaseapp.com",
	projectId: "e-commerce-cb1da",
	storageBucket: "e-commerce-cb1da.appspot.com",
	messagingSenderId: "643522166005",
	appId: "1:643522166005:web:b5f64a3204ba71bcc5d9bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
