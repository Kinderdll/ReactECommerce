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

export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;