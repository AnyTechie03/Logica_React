
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCcMymUAov7v8fxEK6XXKD6-ZGJcyI2GZs",
  authDomain: "imageuploaddb-75eba.firebaseapp.com",
  projectId: "imageuploaddb-75eba",
  storageBucket: "imageuploaddb-75eba.appspot.com",
  messagingSenderId: "886831860666",
  appId: "1:886831860666:web:5a478d3af5bac912edab83"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)