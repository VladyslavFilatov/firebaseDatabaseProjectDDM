import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyBGDc9sH-hExET-_e_ZJEKc7b5V1w9E92E',
  authDomain: 'todo-79d89.firebaseapp.com',
  projectId: 'todo-79d89',
  storageBucket: 'todo-79d89.appspot.com',
  messagingSenderId: '338148531019',
  appId: '1:338148531019:web:6d7132c09f3e4ae56b26ce',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, {
  experimentalForceLongPolling: true,
});

export {
  auth,
  db
}