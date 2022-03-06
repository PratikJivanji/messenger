import firebase from "firebase/app";
import "firebase/auth"

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

export const auth = firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
}).auth();