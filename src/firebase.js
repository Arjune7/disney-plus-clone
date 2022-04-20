import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWmfWHy0XQMfrVuY-DAH-awH49GJFXS7g",
  authDomain: "disney-plus-clone-75003.firebaseapp.com",
  projectId: "disney-plus-clone-75003",
  storageBucket: "disney-plus-clone-75003.appspot.com",
  messagingSenderId: "47999550822",
  appId: "1:47999550822:web:516a9e636173fa053674a7",
  measurementId: "G-T6FMSPD6GH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
