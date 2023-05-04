import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAm248JQ15SmLapJ0T-EXlG-S0UGMcHdYw",
    authDomain: "snickers-ff4df.firebaseapp.com",
    projectId: "snickers-ff4df",
    storageBucket: "snickers-ff4df.appspot.com",
    messagingSenderId: "370306569806",
    appId: "1:370306569806:web:87e2b34dc221714bbdd51f",
    measurementId: "G-DXZF2TQNQ8"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, app };
export default firestore;
