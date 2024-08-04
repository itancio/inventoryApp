// Import the functions you need from the required SDKs
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCALpqmGrlnZF0BXpyq8v21l1CIgYdHNMo",
  authDomain: "inventoryproj-a76af.firebaseapp.com",
  projectId: "inventoryproj-a76af",
  storageBucket: "inventoryproj-a76af.appspot.com",
  messagingSenderId: "1079859781548",
  appId: "1:1079859781548:web:300164b07cf96817e56409",
  measurementId: "G-TTZSVVBLFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };