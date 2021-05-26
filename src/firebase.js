// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//run command=> npm install --save firebase
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrfk8q_cpy66Zdbiiv-iCObpw0Vd6yT_Q",
    authDomain: "clone-8ca7c.firebaseapp.com",
    projectId: "clone-8ca7c",
    storageBucket: "clone-8ca7c.appspot.com",
    messagingSenderId: "766796719324",
    appId: "1:766796719324:web:6a0fe5fac0600600708019",
    measurementId: "G-TGG0JD99ES"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  const auth= firebase.auth();

  export {db, auth};