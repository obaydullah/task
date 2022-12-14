// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTcFIPSvLwtonCe8nMNDw_82wF1fz2mT8",
  authDomain: "task-50cb7.firebaseapp.com",
  projectId: "task-50cb7",
  storageBucket: "task-50cb7.appspot.com",
  messagingSenderId: "826536157939",
  appId: "1:826536157939:web:ddbc045629ecd2c5a7cd86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default app;
export { db };
