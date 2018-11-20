import firebase from 'firebase';
// Ensures that apikeys is not in git repo
import apikey from './apikey';

// Initialize Firebase
var config = {
    apiKey: apikey,
    authDomain: "dragaluf2.firebaseapp.com",
    databaseURL: "https://dragaluf2.firebaseio.com",
    projectId: "dragaluf2",
    storageBucket: "dragaluf2.appspot.com",
    messagingSenderId: "135938291406"
};

var fire = firebase.initializeApp(config);
export default fire;