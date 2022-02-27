import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzxfIdiW9dFwaRPrDIss_SJRJSlBW9psU",
    authDomain: "react-auth-25d98.firebaseapp.com",
    projectId: "react-auth-25d98",
    storageBucket: "react-auth-25d98.appspot.com",
    messagingSenderId: "871197203998",
    appId: "1:871197203998:web:d1517702b33cdc609cd80f"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export { auth, googleAuthProvider, facebookAuthProvider };