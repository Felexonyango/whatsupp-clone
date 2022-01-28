import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvjjFkyzkENNkdAISOLobLDINX-kt--YY",
  authDomain: "reactnativepp-6afe0.firebaseapp.com",
  projectId: "reactnativepp-6afe0",
  storageBucket: "reactnativepp-6afe0.appspot.com",
  messagingSenderId: "104217891820",
  appId: "1:104217891820:web:3fe182bde4316d9cb2a6c9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
