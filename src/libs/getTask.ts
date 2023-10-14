import { doc, getDoc } from "firebase/firestore";

import { db } from "./firebase";

export async function getTask(id: string) {
  const docRef = doc(db, "tasks", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const task = docSnap.data();

    return task;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
