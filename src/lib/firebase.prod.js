import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase }  from '../seed';

const config = {
    apiKey: "AIzaSyDbChWQH0PCak5pQQP3T8no3bXeAWlGnsI",
    authDomain: "oneofonemedia-60dc8.firebaseapp.com",
    projectId: "oneofonemedia-60dc8",
    storageBucket: "oneofonemedia-60dc8.appspot.com",
    messagingSenderId: "734113201259",
    appId: "1:734113201259:web:739f78e2389765a8c8452e",

};

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);


export { firebase };
