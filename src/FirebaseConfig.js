import * as firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgNVS5-dGanUTvKEc6KpVg3h8N1CmggEE",
    authDomain: "inv-management-system3512.firebaseapp.com",
    databaseURL: "https://inv-management-system3512.firebaseio.com",
    projectId: "inv-management-system3512",
    storageBucket: "inv-management-system3512.appspot.com",
    messagingSenderId: "1016456913500"
  };
  const fire = firebase.initializeApp(config);

  export default fire;