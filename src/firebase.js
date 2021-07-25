import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5ibqTZ4NRTcsHDpcUBn3O-FyH4Jyvq2c",
  authDomain: "linkedin-clone-d9c75.firebaseapp.com",
  projectId: "linkedin-clone-d9c75",
  storageBucket: "linkedin-clone-d9c75.appspot.com",
  messagingSenderId: "61949565141",
  appId: "1:61949565141:web:e8f3ce66fdf653f224aa5c",
  measurementId: "G-G636HBFH3N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
