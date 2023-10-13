import { useEffect } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

import { db } from "../libs/firebase";
import { TaskItem } from "../components/TaskItem";
import { useTaskContext } from "../contexts/TaskContext";

import { getAllTasks } from "../libs/getAllTasks";

/**
 * @description Main layout
 * @version 1.0.0
 */
export default function Main() {
  const { tasks, setTasks, isModified, setIsModified } = useTaskContext();

  // Delete a task.
  async function deleteTask(id: string) {
    await deleteDoc(doc(db, "tasks", id));

    setIsModified(true);
  }

  // Toggle a task.
  async function toggleTask(id: string, isDone: boolean) {
    const docRef = doc(db, "tasks", id);

    await updateDoc(docRef, {
      isDone: !isDone,
    });

    setIsModified(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      const newTask = await getAllTasks();

      setTasks(newTask);
    };

    if (isModified) {
      fetchData();
      setIsModified(false);
    }
  }, [isModified, setIsModified, setTasks]);

  return (
    <main className="my-10 px-10 py-5 max-w-4xl mx-auto">
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
