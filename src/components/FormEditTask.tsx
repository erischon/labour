import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTaskContext } from "../contexts/TaskContext";

type FormEditTaskProps = {
  editTask: (task: string) => Promise<void>;
  task: { taskName: string; id: string };
};

/**
 * @description Form for adding a task to the database
 * @version 1.0.0
 */
export default function FormEditTask({ editTask, task }: FormEditTaskProps) {
  const [updatedTask, setUpdatedTask] = useState(task.taskName);
  const { setIsModified } = useTaskContext();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await editTask(updatedTask);
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
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />

          <button
            type="submit"
            className="bg-slate-700 text-slate-100 py-2 px-6"
          >
            Edit task
          </button>
        </div>
      </form>
    </>
  );
}
