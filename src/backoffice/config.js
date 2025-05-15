// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbV6PP_EEmfaGzzIKbQA0xGy5McchskUQ",
    authDomain: "backoffice-61483.firebaseapp.com",
    databaseURL: "https://backoffice-61483-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "backoffice-61483",
    storageBucket: "backoffice-61483.firebasestorage.app",
    messagingSenderId: "173869786345",
    appId: "1:173869786345:web:ac959145e4c3904a43fc78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db }; 