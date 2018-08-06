import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//---------------------------------------------------------------------------
// TEST CODE

// import { testExpenses } from '../tests/fixtures/expenses';

// database.ref().set({
//   name: 'Julian Nicholls',
//   age: 51,
//   location: {
//     city: 'Bournemouth',
//     code: 'BH6 5AE',
//     country: 'UK'
//   }
// });

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();

//     console.log(val);
//   })
//   .catch(e => console.error('Read Error:', e));

// database.ref().on('value', snapshot => {
//   const data = snapshot.val();

//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// setTimeout(() => {
//   database.ref('job/company').set('Google');
// }, 1500);

// setTimeout(() => {
//   database.ref('job/company').set('Amazon');
// }, 3000);

// database.ref('notes').push({
//   title: 'To Do',
//   text: 'Add another one'
// });

// database.ref('notes/-LIzC2S26qGVgzNhlFSv').update({
//   text: 'update one'
// });

// testExpenses.forEach(expense => database.ref('expenses').push(expense));

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach(item => {
//     expenses.push({ id: item.key, ...item.val() });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'electricity',
//   amount: 2500,
//   createdAt: 3600000000,
//   note: ''
// });

//---------------------------------------------------------------------------

export { firebase, googleAuthProvider, database as default };
