import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../libs/firebase";
import { TaskItem } from "../components/TaskItem";

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

/**
 * @description Main layout
 * @version 1.0.0
 */
export default function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const navigate = useNavigate();

  // Get all tasks.
  async function getAllTasks() {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const tasksData: Task[] = [];

    querySnapshot.forEach((doc) => {
      tasksData.push({ id: doc.id, ...doc.data() } as Task);
    });

    setTasks(tasksData);
  }

  // Delete a task.
  async function deleteTask(id: string) {
    await deleteDoc(doc(db, "tasks", id));

    return navigate("/");
  }

  /**
   * @description Toggle task, set isDone to true or false
   * @version 1.0.0
   * @param id  The id of the task
   * @param isDone  The status of the task
   */
  async function toggleTask(id: string, isDone: boolean) {
    const docRef = doc(db, "tasks", id);

    await updateDoc(docRef, {
      isDone: !isDone,
    });
  }

  useEffect(() => {
    if (!tasks.length) {
      getAllTasks();
    }
  }, [tasks.length]);

  return (
    <main className="my-10">
      <div className="w-full">
        <div className="grid grid-cols-12 px-5 py-2 mb-4 bg-slate-700 rounded-sm">
          <div className="col-span-10 font-semibold">Tasks</div>
          <div className="col-span-2 text-center font-semibold">Actions</div>
        </div>

        <div className="">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
