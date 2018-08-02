import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBWhpfvyv6uiz7NyPyoubdNp4h-d4L29EM',
  authDomain: 'expensify-eb969.firebaseapp.com',
  databaseURL: 'https://expensify-eb969.firebaseio.com',
  projectId: 'expensify-eb969',
  storageBucket: 'expensify-eb969.appspot.com',
  messagingSenderId: '547731115610'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
