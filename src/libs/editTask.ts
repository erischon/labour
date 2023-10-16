import { doc, updateDoc } from "firebase/firestore";

import { db } from "./firebase";

/**
 * Edits a task with the updated task name.
 * @param updatedTask - The updated task name.
 * @returns Promise<void>
 */
export async function editTask(id: string, updatedTask: string): Promise<void> {
  try {
    const docRef = doc(db, "tasks", id);

    await updateDoc(docRef, {
      taskName: updatedTask,
    });
  } catch (e) {
    console.error("Error adding task: ", e);
  }
}
