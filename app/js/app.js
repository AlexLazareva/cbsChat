  var config = {
 		apiKey: "AIzaSyABWKA1mqK4NsTGKD1U3BcasOUbBpNMB9A",
 		authDomain: "cbschat-639d5.firebaseapp.com",
 		databaseURL: "https://cbschat-639d5.firebaseio.com",
 		storageBucket: "cbschat-639d5.appspot.com",
 		messagingSenderId: "1021546218189"
  };
  firebase.initializeApp(config);

angular.module('cbsChat', ['firebase']);