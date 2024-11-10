// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDR5vK0mE3EKRPRF4bI1eeNisjU0bKQs-c",
//   authDomain: "delivx-e74bf.firebaseapp.com",
//   projectId: "delivx-e74bf",
//   storageBucket: "delivx-e74bf.firebasestorage.app",
//   messagingSenderId: "340739412651",
//   appId: "1:340739412651:web:95bb558f7c9f61e79d1dee",
//   measurementId: "G-BRSERX1G41",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
