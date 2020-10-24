import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBjhdzCRBsf_skaBjRDaeKU_X4LNoRXhuU",
  authDomain: "magic-decors-b1aa5.firebaseapp.com",
  databaseURL: "https://magic-decors-b1aa5.firebaseio.com",
  projectId: "magic-decors-b1aa5",
  storageBucket: "magic-decors-b1aa5.appspot.com",
  messagingSenderId: "227399415661",
  appId: "1:227399415661:web:8dbce5bc73f3c86b1fcc64",
  measurementId: "G-46RCH72320"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase