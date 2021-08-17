import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBQJ23iECFk21E6BPQ_K91w0I7JCz3tFWQ",
    authDomain: "trackseries-bb6d9.firebaseapp.com",
    projectId: "trackseries-bb6d9",
    storageBucket: "trackseries-bb6d9.appspot.com",
    messagingSenderId: "18224138959",
    appId: "1:18224138959:web:9be51efc856f23436645ba",
    measurementId: "G-TB4ZFCPVR8"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

  export default fire;