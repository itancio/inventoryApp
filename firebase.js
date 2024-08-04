// Import the functions you need from the required SDKs
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx2OCSRI3wdAIMxG8Gs-ReWA29q_qpjQw",
  authDomain: "pantryapp-88123.firebaseapp.com",
  projectId: "pantryapp-88123",
  storageBucket: "pantryapp-88123.appspot.com",
  messagingSenderId: "693051808424",
  appId: "1:693051808424:web:1c57b83a1461706b09809d",
  measurementId: "G-1D7YKC2WNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };