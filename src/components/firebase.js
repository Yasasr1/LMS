import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1I4w3OUaDmITrLrA0TDfhicVwVWDnJrk",
  authDomain: "servicio-11f11.firebaseapp.com",
  databaseURL: "https://servicio-11f11.firebaseio.com",
  projectId: "servicio-11f11",
  storageBucket: "servicio-11f11.appspot.com",
  messagingSenderId: "793279080424",
  appId: "1:793279080424:web:3623d109f0d80d0839e65d",
  measurementId: "G-KZR43F82X5"

};

const fire = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default fire;


