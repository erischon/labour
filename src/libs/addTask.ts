import { addDoc, collection } from "firebase/firestore";

import { db } from "../libs/firebase";

export async function addTask(task: string) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      taskName: task,
      createdAt: new Date(),
      isDone: false,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding task: ", e);
  }
}
