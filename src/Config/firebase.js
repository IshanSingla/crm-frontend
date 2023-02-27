import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBe1hjgV3WQ8pUPUfPKd3J9oOKltgnwzzA",
  authDomain: "crm-indusianassist.firebaseapp.com",
  projectId: "crm-indusianassist",
  storageBucket: "crm-indusianassist.appspot.com",
  messagingSenderId: "55656936373",
  appId: "1:55656936373:web:8dc3d2ad424cf600499ffc",
  measurementId: "G-C9QQF977C0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);