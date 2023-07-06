// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyCN6x_GbDpxis2djF3YjcXZQQD_qbdfPQE",
//   authDomain: "nd-69650.firebaseapp.com",
//   projectId: "nd-69650",
//   storageBucket: "nd-69650.appspot.com",
//   messagingSenderId: "801976864620",
//   appId: "1:801976864620:web:c404660048ed1ed801ad49",
//   measurementId: "G-7Y9JMWQHRE",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6x_GbDpxis2djF3YjcXZQQD_qbdfPQE",
  authDomain: "nd-69650.firebaseapp.com",
  projectId: "nd-69650",
  storageBucket: "nd-69650.appspot.com",
  messagingSenderId: "801976864620",
  appId: "1:801976864620:web:c404660048ed1ed801ad49",
  measurementId: "G-7Y9JMWQHRE",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
// const analytics = getAnalytics(app);
