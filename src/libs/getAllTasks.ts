import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

// Get all tasks.
export async function getAllTasks() {
  const querySnapshot = await getDocs(collection(db, "tasks"));

  const tasksData: Task[] = [];

  querySnapshot.forEach((doc) => {
    tasksData.push({ id: doc.id, ...doc.data() } as Task);
  });

  return tasksData;
}
