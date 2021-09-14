import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyBeW2Plm-hjTf9VWbT1k0NCxXNQkhK1qME",
    authDomain: "vachat-fe.firebaseapp.com",
    projectId: "vachat-fe",
    storageBucket: "vachat-fe.appspot.com",
    messagingSenderId: "64772692669",
    appId: "1:64772692669:web:171fb4474cd6e7ea17b5d4"
}

const db = firebase.initializeApp(config);
export default db;