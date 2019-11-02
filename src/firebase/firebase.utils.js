import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyBcqJDnwI26MYBLNvAZ7igg2pe_OZTBpGY",
        authDomain: "ecommerce-react-79bed.firebaseapp.com",
        databaseURL: "https://ecommerce-react-79bed.firebaseio.com",
        projectId: "ecommerce-react-79bed",
        storageBucket: "",
        messagingSenderId: "233824708270",
        appId: "1:233824708270:web:b9c4ad257c9f6f94"
      };

firebase.initializeApp(config); 

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
   if(!snapShot.exists){
      const{displayName , email} = userAuth;
      const createdAt= new Date();

      try{
          await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionlData
          })
      } 
      catch(error){
        console.log('error creating user' ,error.message)
      }

    }
    
    return userRef;
  }
  


export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;