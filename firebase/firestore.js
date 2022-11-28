import app from "./initFireBase.js";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(app);

// Add a new document in collection "users"
await setDoc(doc(db, "users", "3"), {
  name: "Patrick",
});

export { db };

console.log("A");
