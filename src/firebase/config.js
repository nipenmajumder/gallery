import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfsnPYxNHA0lC16sN_g-SoCn_MHz3z9AE",
  authDomain: "gallery-e23a7.firebaseapp.com",
  databaseURL: "https://gallery-e23a7.firebaseio.com",
  projectId: "gallery-e23a7",
  storageBucket: "gallery-e23a7.appspot.com",
  messagingSenderId: "186421772048",
  appId: "1:186421772048:web:ea2835a88974be94122f95",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
