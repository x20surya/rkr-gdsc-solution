// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBArOVoz0GEbbHzROw3CQy21xKzJZZBoyg",
  authDomain: "gdsc-solution-d963e.firebaseapp.com",
  projectId: "gdsc-solution-d963e",
  storageBucket: "gdsc-solution-d963e.appspot.com",
  messagingSenderId: "868921508827",
  appId: "1:868921508827:web:4fb017bdd70b8a4ad19dfe",
  measurementId: "G-Q8HQPBRYC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
