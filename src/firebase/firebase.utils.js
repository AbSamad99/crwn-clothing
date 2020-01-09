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

  export const createUserProfileDocument= async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`/users/${userAuth.uid}`);

    const snapShot=await userRef.get(); 

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('encountered an error',error);
      }
    }

    return userRef;
    
  }

  export const addCollectionAndDocuments=(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocRef=collectionRef.doc();
      batch.set(newDocRef,obj); 
    });

    batch.commit()
  }

  export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection=collections.docs.map(doc=>{
      const {title,items}=doc.data();
      return {
        title,
        items,
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id
      }
    });
    return transformedCollection.reduce((acc,collection)=>{
      acc[collection.title.toLowerCase()]=collection;
      return acc
    },{})
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;