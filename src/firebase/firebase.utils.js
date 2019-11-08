import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBRzsZyUCHtvMW3bp5rN54Z0zqTL1xpK-c",
    authDomain: "crwn-clothing-158ed.firebaseapp.com",
    databaseURL: "https://crwn-clothing-158ed.firebaseio.com",
    projectId: "crwn-clothing-158ed",
    storageBucket: "crwn-clothing-158ed.appspot.com",
    messagingSenderId: "333920402890",
    appId: "1:333920402890:web:53f1b0035bd8516060e333",
    measurementId: "G-BLN8K8LLQV"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;