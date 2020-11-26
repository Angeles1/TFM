import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/firebase-auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC5bOCU9Z6MevWeZgkqRuU-xCqGV-h67hM",
    authDomain: "tfm-uoc-57165.firebaseapp.com",
    databaseURL: "https://tfm-uoc-57165.firebaseio.com",
    projectId: "tfm-uoc-57165",
    storageBucket: "tfm-uoc-57165.appspot.com",
    messagingSenderId: "484447138887",
    appId: "1:484447138887:web:1b411abec2716fe8d8ad62",
    measurementId: "G-RTV15144DG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  export default{
    firebase,  
    db,
    auth,
  };