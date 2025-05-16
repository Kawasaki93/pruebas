// Firebase configuration
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
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    window.db = db;
} catch (error) {
    console.error('Error al inicializar Firebase:', error);
    alert('Error al inicializar Firebase: ' + error.message);
} 