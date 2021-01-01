import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    apiKey: "AIzaSyDONG9-Ukt_LAt6HIRe6Wb9GClEahSpUDY",
    authDomain: "auth-development-d32ef.firebaseapp.com",
    projectId: "auth-development-d32ef",
    storageBucket: "auth-development-d32ef.appspot.com",
    messagingSenderId: "200415848599",
    appId: "1:200415848599:web:535ad7bb201540e83321d2"
  });
  // Initialize Firebase
export const auth = app.auth()
export default app