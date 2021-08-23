import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBnEUAlDNjSRzfdPtKQM2_ryq3SvgScKk0",
  authDomain: "netflix-clone-live-68fd4.firebaseapp.com",
  projectId: "netflix-clone-live-68fd4",
  storageBucket: "netflix-clone-live-68fd4.appspot.com",
  messagingSenderId: "639837937638",
  appId: "1:639837937638:web:85c82bee68c924b18dc027"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
