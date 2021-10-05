import firebase from "firebase/app";
import "firebase/auth";

export function initializeApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyBLnixFP-rLWHOOEvxC2pjF1ocCrH2qt1A",
    authDomain: "etherio-pay.firebaseapp.com",
    databaseURL: "https://etherio-pay-default-rtdb.firebaseio.com",
    projectId: "etherio-pay",
    storageBucket: "etherio-pay.appspot.com",
    messagingSenderId: "927983401567",
    appId: "1:927983401567:web:3323be6b7ee9a37a5fb9ea",
    measurementId: "G-SQ08BEE4GJ",
  };
  return () => firebase.initializeApp(firebaseConfig);
}
