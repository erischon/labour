import { doc, updateDoc } from "firebase/firestore";
import { db } from "../libs/firebase";

/**
 * Toggles the isDone property of a task in the "tasks" collection in Firestore.
 * @param id The ID of the task to toggle.
 * @param isDone The current value of the task's isDone property.
 */
export async function toggleTask(id: string, isDone: boolean) {
  const docRef = doc(db, "tasks", id);

  await updateDoc(docRef, {
    isDone: !isDone,
  });
}
