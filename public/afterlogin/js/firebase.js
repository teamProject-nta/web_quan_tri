const firebaseConfig = {
  apiKey: "AIzaSyBhECFBJadJ4yFQF4KxbVfA7a6mrWsM_jo",
  authDomain: "appsale-ba3f9.firebaseapp.com",
  databaseURL: "https://appsale-ba3f9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appsale-ba3f9",
  storageBucket: "appsale-ba3f9.appspot.com",
  messagingSenderId: "757083996678",
  appId: "1:757083996678:web:258b05b355945f9d207987",
  measurementId: "G-85H2Z7X2MT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();