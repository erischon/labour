import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../libs/firebase";

/**
 * Deletes a task from the "tasks" collection in Firestore.
 * @param id The ID of the task to delete.
 */
export async function deleteTask(id: string) {
  await deleteDoc(doc(db, "tasks", id));
}
