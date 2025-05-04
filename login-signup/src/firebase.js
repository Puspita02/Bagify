import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Import GoogleAuthProvider

const firebaseConfig = {
    apiKey: "AIzaSyAaE459Q2nrgzwT79MSOaw6NEYRGA-OOP4",
    authDomain: "bagify-7a3fe.firebaseapp.com",
    projectId: "bagify-7a3fe",
    storageBucket: "bagify-7a3fe.appspot.com", // 🔧 fixed URL (it should be firebaseapp.com not storage.app)
    messagingSenderId: "862331734259",
    appId: "1:862331734259:web:c4dde663883a4180accf86",
    measurementId: "G-F9VJ57Z8EQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//import { GoogleAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export default app;
