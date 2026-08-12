import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-729bf.firebaseapp.com",
  projectId: "interviewiq-729bf",
  storageBucket: "interviewiq-729bf.firebasestorage.app",
  messagingSenderId: "182217090128",
  appId: "1:182217090128:web:6b71205f6c10bf752b5d55"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};