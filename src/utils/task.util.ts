import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

import { db } from "../libs/firebase";

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

/**
 * Adds a new task to the Firestore database.
 * @param task - The name of the task to add.
 * @returns A Promise that resolves with the ID of the newly created document.
 */
export async function addTask(task: string): Promise<void> {
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

/**
 * Deletes a task from the "tasks" collection in Firestore.
 * @param id The ID of the task to delete.
 */
export async function deleteTask(id: string) {
  await deleteDoc(doc(db, "tasks", id));
}

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

/**
 * Retrieves all tasks from the "tasks" collection in Firestore.
 * @returns A Promise that resolves with an array of Task objects.
 */
export async function getAllTasks() {
  const querySnapshot = await getDocs(collection(db, "tasks"));

  const tasksData: Task[] = [];

  querySnapshot.forEach((doc) => {
    tasksData.push({ id: doc.id, ...doc.data() } as Task);
  });

  return tasksData;
}

/**
 * Retrieves a task from the database by its ID.
 * @param id - The ID of the task to retrieve.
 * @returns A Promise that resolves with the retrieved task, or undefined if the task does not exist.
 */
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
