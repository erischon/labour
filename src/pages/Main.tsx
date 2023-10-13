import { useEffect, useState } from "react";
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
  const [filter, setFilter] = useState("all");

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
        <div className="grid grid-cols-12 px-5 py-2 mb-3 bg-slate-700 rounded-sm">
          <div className="col-span-10 flex items-center">
            <p className="mr-10 font-semibold">Tasks</p>

            <div className="flex items-end gap-6 text-sm h-full">
              <label>
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filter === "all"}
                  onChange={() => setFilter("all")}
                />{" "}
                All
              </label>

              <label>
                <input
                  type="radio"
                  name="filter"
                  value="done"
                  checked={filter === "done"}
                  onChange={() => setFilter("done")}
                />{" "}
                Done
              </label>

              <label>
                <input
                  type="radio"
                  name="filter"
                  value="undone"
                  checked={filter === "undone"}
                  onChange={() => setFilter("undone")}
                />{" "}
                Undone
              </label>
            </div>
          </div>

          <div className="col-span-2 text-center font-semibold">Actions</div>
        </div>

        <div className="">
          {tasks
            .filter((task) => {
              if (filter === "all") {
                return true;
              } else if (filter === "done") {
                return task.isDone;
              } else {
                return !task.isDone;
              }
            })
            .map((task) => (
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
