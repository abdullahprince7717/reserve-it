import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };


// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBVIIaVQAiBzRlrbqop5K59gmuJhmL3im8",
//     authDomain: "reserveit-4de46.firebaseapp.com",
//     projectId: "reserveit-4de46",
//     storageBucket: "reserveit-4de46.appspot.com",
//     messagingSenderId: "71458307802",
//     appId: "1:71458307802:web:3bfb7f2dc5adf97da72fe3",
//     measurementId: "G-J8B5GHPQ6N"
//   };


// const app = initializeApp(firebaseConfig);
// export const authentication  = getAuth(app);

// v9 compat packages are API compatible with v8 code
