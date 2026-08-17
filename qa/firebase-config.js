import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZjZ23tYoRUA6CmGqV2Lbrt9f7BPk3XlM",
  authDomain: "vicky-leaps-1.firebaseapp.com",
  projectId: "vicky-leaps-1",
  storageBucket: "vicky-leaps-1.firebasestorage.app",
  messagingSenderId: "512316407571",
  appId: "1:512316407571:web:7985d49268b1e51baca4e6",
  measurementId: "G-QC7LPKM5CE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
