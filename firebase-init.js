// Import Firebase SDKs (make sure they are also in your HTML as script tags)
const firebaseConfig = {
  apiKey: "AIzaSyBQTKu0peEEss99dkaOxHK3lw_nmhgAX_Q",
  authDomain: "fir-ai-app-d19e6.firebaseapp.com",
  projectId: "fir-ai-app-d19e6",
  storageBucket: "fir-ai-app-d19e6.firebasestorage.app",
  messagingSenderId: "655293858757",
  appId: "1:655293858757:web:8cc5c4d98c7ba96fb381ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Firestore globally accessible
const db = firebase.firestore();



