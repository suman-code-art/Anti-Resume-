// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// 🔧 Paste your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyD5hOtrEmaNNth2u00aKgc9FSIcooBZy1E",
    authDomain: "anti-resume-84bf9.firebaseapp.com",
    projectId: "anti-resume-84bf9",
    storageBucket: "anti-resume-84bf9.firebasestorage.app",
    messagingSenderId: "812446876507",
    appId: "1:812446876507:web:cea5fb02b90570d8ee907e",
    measurementId: "G-7V187MB6DT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Function
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Registration successful!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// Login Function
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Login successful!";
      // Redirect or show dashboard here
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};
