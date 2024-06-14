import {firebase} from "@react-native-firebase/app";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCPiIlLIrTbzVgauhMfWQJB05uidpP2YYw",
    authDomain: "unmasked-b29ef.firebaseapp.com",
    projectId: "unmasked-b29ef",
    storageBucket: "unmasked-b29ef.appspot.com",
    messagingSenderId: "544898178639",
    appId: "1:544898178639:web:1b46ab5642dddcbd08d43a",
    measurementId: "G-1NJ23X71G1"
  };
  
const app=initializeApp(firebaseConfig);

GoogleSignin.configure({
  webClientId:"544898178639-or34pkvokjbbfsp2p9nkbig1illvumhg.apps.googleusercontent.com"
})

export const auth=getAuth(app);

//export auth;