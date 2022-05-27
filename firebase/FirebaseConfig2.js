import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdWgw5fZsZHzeBvULx8Qv6Mfbs5yC3pXE",
    authDomain: "reserve-it-business.firebaseapp.com",
    projectId: "reserve-it-business",
    storageBucket: "reserve-it-business.appspot.com",
    messagingSenderId: "677579015732",
    appId: "1:677579015732:web:326c5bf8ee887e7abfac61",
    measurementId: "G-QY8XWMYMDJ"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const dbBusiness = getFirestore(app);
const authBusiness = firebase.auth();
const storage = getStorage(app);


export { dbBusiness, authBusiness,storage};
