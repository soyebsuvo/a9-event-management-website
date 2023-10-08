// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrqrnq8Ip4Tolru2Pm8LIp6I1Ff57Q5wI",
  authDomain: "event-management-assignm-e79f0.firebaseapp.com",
  projectId: "event-management-assignm-e79f0",
  storageBucket: "event-management-assignm-e79f0.appspot.com",
  messagingSenderId: "401514623133",
  appId: "1:401514623133:web:5e548135beadc59bb52474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;