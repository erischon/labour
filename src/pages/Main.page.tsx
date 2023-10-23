import { useEffect, useState } from "react";

import { TaskItem } from "../components/TaskItem";
import { useTaskContext } from "../contexts/TaskContext";

import { getAllTasks } from "../utils/task.util";

/**
 * Renders the main page.
 * @returns {JSX.Element} - The rendered component.
 */
export default function MainPage(): JSX.Element {
  const { tasks, setTasks, isModified, setIsModified } = useTaskContext();
  const [filter, setFilter] = useState("all");

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
    <main className="my-10 p-5 md:px-10 md:py-5 w-full max-w-4xl mx-auto">
      <div className="w-full" id="tasks-list">
        <div className="md:grid md:grid-cols-12 px-5 py-2 mb-3 bg-slate-700 rounded-sm">
          <div className="md:col-span-10 flex items-center justify-center md:justify-start">
            <p className="mr-10 font-semibold hidden md:block">Tasks</p>

            <div className="flex items-end gap-6 text-sm font-thin h-full">
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filter === "all"}
                  onChange={() => setFilter("all")}
                />{" "}
                All
              </label>

              <label className="flex gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="undone"
                  checked={filter === "undone"}
                  onChange={() => setFilter("undone")}
                />{" "}
                Undone
              </label>

              <label className="flex gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="done"
                  checked={filter === "done"}
                  onChange={() => setFilter("done")}
                />{" "}
                Done
              </label>
            </div>
          </div>

          <div className="md:col-span-2 text-center font-semibold hidden md:block">
            Actions
          </div>
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
              <TaskItem key={task.id} {...task} />
            ))}
        </div>
      </div>
    </main>
  );
}
