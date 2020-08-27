import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSholR5xpMhVeouxC-ckJLl94zLshGXts",
  authDomain: "twitter-clone-26f8c.firebaseapp.com",
  databaseURL: "https://twitter-clone-26f8c.firebaseio.com",
  projectId: "twitter-clone-26f8c",
  storageBucket: "twitter-clone-26f8c.appspot.com",
  messagingSenderId: "139826403268",
  appId: "1:139826403268:web:79998510ca54d541433691",
  measurementId: "G-80S8B1RRDG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
