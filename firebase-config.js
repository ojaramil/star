/**
 * S.T.A.R - Firebase Configuration
 * Proyecto: star-app-d1475
 */

const firebaseConfig = {
    apiKey: "AIzaSyCAgyDMi0IxGQ2vJjKgih1V3K9G657utDI",
    authDomain: "star-app-d1475.firebaseapp.com",
    projectId: "star-app-d1475",
    storageBucket: "star-app-d1475.firebasestorage.app",
    messagingSenderId: "457151348430",
    appId: "1:457151348430:web:3b3b412373b633eb2b9a9f"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia para uso global
window.STAR_DB = db;
console.log('🔥 Firebase inicializado correctamente');
