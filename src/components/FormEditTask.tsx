import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTaskContext } from "../contexts/TaskContext";
import { editTask } from "../utils/task.util";

type FormEditTaskProps = {
  task: { taskName: string };
  id: string;
};

/**
 * Renders a form to edit a task.
 * @param {Object} props - The component props.
 * @param {Function} props.editTask - The function to edit the task.
 * @param {Object} props.task - The task to be edited.
 * @returns {JSX.Element} - The rendered component.
 */
export default function FormEditTask({
  task,
  id,
}: FormEditTaskProps): JSX.Element {
  const [updatedTask, setUpdatedTask] = useState(task.taskName);
  const { setIsModified } = useTaskContext();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await editTask(id, updatedTask);
    setIsModified(true);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="text-black p-2 md:w-96"
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
