import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3bgWB0qZ2QnH2ZK5mql2S49E_ixZjInQ",
  authDomain: "printerscheduler-e9e74.firebaseapp.com",
  projectId: "printerscheduler-e9e74",
  storageBucket: "printerscheduler-e9e74.firebasestorage.app",
  messagingSenderId: "11551500034",
  appId: "1:11551500034:web:ba2f8685038c06dbad041b",
  measurementId: "G-0YRJE0C1VZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
