import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBZ6LFFgcxqvQkvHBodG2wy15EtDtTHJbs",
  authDomain: "about-myself-591d8.firebaseapp.com",
  projectId: "about-myself-591d8",
  storageBucket: "about-myself-591d8.appspot.com",
  messagingSenderId: "808178790356",
  appId: "1:808178790356:web:0cbdf18ad9216770303041",
  measurementId: "G-PSQ9G3RVYX"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()