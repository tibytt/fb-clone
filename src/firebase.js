import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmss5IW0drSHS5NylMesp6YCnFSK14ABM",
    authDomain: "fb-clone-eecda.firebaseapp.com",
    databaseURL: "https://fb-clone-eecda.firebaseio.com",
    projectId: "fb-clone-eecda",
    storageBucket: "fb-clone-eecda.appspot.com",
    messagingSenderId: "986417274475",
    appId: "1:986417274475:web:a014d4fe0676c356515b2e",
    measurementId: "G-H9Y9CRJ2XZ"
  };

  //esto conecta nuestro front con el back de firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //esto permite hacer login, sign in etc
  const auth = firebase.auth();
  //poder entrar con google
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;