import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDRjbSBCamkxKg3g8A5Pex3p6rKUW7ipCs",
    authDomain: "reserve-it-c9d5e.firebaseapp.com",
    projectId: "reserve-it-c9d5e",
    storageBucket: "reserve-it-c9d5e.appspot.com",
    messagingSenderId: "116657316456",
    appId: "1:116657316456:web:3cfc82403c938d03ca91dd"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = getFirestore(app);
const auth = firebase.auth();
const storage = getStorage(app);

export { db, auth,storage};

