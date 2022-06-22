import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrirfnmFhmtGZcGjhRn6zT_L2ip8-U6f4",
  authDomain: "instagram-a79a2.firebaseapp.com",
  projectId: "instagram-a79a2",
  storageBucket: "instagram-a79a2.appspot.com",
  messagingSenderId: "68252126693",
  appId: "1:68252126693:web:cc319d6ad100384621730c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;