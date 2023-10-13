import { useState } from "react";

import { useTaskContext } from "../contexts/TaskContext";

type FormEditTaskProps = {
  id: string;
  taskName: string;
  editTask: (updatedTask: string, id: string) => void;
  onClose: () => void;
};

/**
 * @description Form for adding a task to the database
 * @version 1.0.0
 */
export default function FormEditTask({
  id,
  taskName,
  editTask,
  onClose,
}: FormEditTaskProps) {
  const { setIsModified } = useTaskContext();
  const [updatedTask, setUpdatedTask] = useState(taskName);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await editTask(updatedTask, id);

    setIsModified(true);
    onClose();
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
