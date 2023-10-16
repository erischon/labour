import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTaskContext } from "../contexts/TaskContext";

import { addTask } from "../utils/task.util";

/**
 * Renders a form to add a new task.
 * @param {Object} props - The component props.
 * @param {Function} props.addTask - The function to add a new task.
 * @returns {JSX.Element} - The rendered component.
 */
export default function FormAddTask(): JSX.Element {
  const [task, setTask] = useState("");
  const { setIsModified } = useTaskContext();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTask(task);
    setIsModified(true);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="text-black p-2 w-96"
            type="text"
            placeholder="What do you have to do today?"
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            type="submit"
            className="bg-slate-700 text-slate-100 py-2 px-6"
          >
            Add task
          </button>
        </div>
      </form>
    </>
  );
}
