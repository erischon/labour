import { useEffect, useState, useContext } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

import { db } from "../libs/firebase";
import { TaskItem } from "../components/TaskItem";

import { getAllTasks } from "../libs/getAllTasks";
import { TaskContext } from "../libs/TaskContext";

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
export default function Main({ todos, setTodos }: any) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const context = useContext(TaskContext);

  console.log("====== context", context);

  // Delete a task.
  async function deleteTask(id: string) {
    await deleteDoc(doc(db, "tasks", id));
  }

  // Toggle a task.
  async function toggleTask(id: string, isDone: boolean) {
    const docRef = doc(db, "tasks", id);

    await updateDoc(docRef, {
      isDone: !isDone,
    });
  }

  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      const newTasks = await getAllTasks();

      if (!cancel) {
        setTasks(newTasks);
      }
    }

    fetchData();

    return () => {
      cancel = true;
    };
  }, []);

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
