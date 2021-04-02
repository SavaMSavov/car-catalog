import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp-vsRhxBVhbuxPTE7F01IaRBLFGSrc48",
  authDomain: "bmw-catalog.firebaseapp.com",
  databaseURL:
    "https://bmw-catalog-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bmw-catalog",
  storageBucket: "bmw-catalog.appspot.com",
  messagingSenderId: "153024516194",
  appId: "1:153024516194:web:d1619c18a05e08b289413b",
  measurementId: "G-7TV0JPT5VW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged In");
  } else {
    console.log("Logged out");
  }
});

export default firebase;

export const auth = firebase.auth();

export const database = firebase.database();
