import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { Alert, ToastAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {addUser, clearUser} from '../../reducers/currentUserSlice';

const firebaseConfig = {
  apiKey: 'AIzaSyAILGUM4uf4f_KCAJYikqZaJOjWbgldZ0I',
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized');
  } else {
    firebase.app(); // if already initialized, use that one
    console.log('Firebase already initialized');
  }
};

export const ADMIN_EMAIL = 'admin@email.com';

export const initCheckAuthState = () => {
  console.log('Checking auth state');
  auth().onAuthStateChanged(user => {
    if (user) {
      console.log('User is signed in');
    } else {
      console.log('User is signed out');
    }
  });
};
