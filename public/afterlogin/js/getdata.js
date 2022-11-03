
// ghi dữ liệu

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture: imageUrl
//     });
// }

// Create a new post reference with an auto-generated id
// var postListRef = firebase.database().ref('posts');
// var newPostRef = postListRef.push();
// newPostRef.set({
//     // ...
// });

// đọc dữ liệu 
// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     updateStarCount(postElement, data);
// });

// đọc
// const dbRef = firebase.database().ref();
// dbRef.child("users").child(userId).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// with ES Modules (if using client-side JS, like React)
import firebase from 'firebase/app';
import 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBhECFBJadJ4yFQF4KxbVfA7a6mrWsM_jo",
    authDomain: "appsale-ba3f9.firebaseapp.com",
    databaseURL: "https://appsale-ba3f9.firebaseio.com",
    projectId: "appsale-ba3f9",
    storageBucket: "appsale-ba3f9.appspot.com",
    messagingSenderId: "757083996678",
    appId: "1:757083996678:web:258b05b355945f9d207987",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
import firebase from "/firebase.json";

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// add dữ liệu
db.collection("store").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});



