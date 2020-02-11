import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  var firebaseConfig = {
    apiKey: "AIzaSyA3eqCFZ-Y_lyU55IjZMQI4OFYkkKW4GCQ",
    authDomain: "djcounter-9057a.firebaseapp.com",
    databaseURL: "https://djcounter-9057a.firebaseio.com",
    projectId: "djcounter-9057a",
    storageBucket: "djcounter-9057a.appspot.com",
    messagingSenderId: "803705966213",
    appId: "1:803705966213:web:c05da514619016ef16e3ec"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = fb.database().ref('/');

  export default db;