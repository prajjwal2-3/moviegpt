
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0mBD9aZGWKITNaEfvXQEuzOcXbSqcgm8",
  authDomain: "moviegpt-94252.firebaseapp.com",
  projectId: "moviegpt-94252",
  storageBucket: "moviegpt-94252.appspot.com",
  messagingSenderId: "811545760343",
  appId: "1:811545760343:web:404090d099f51146148912"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();