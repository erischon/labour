import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiEdit, BiTrash } from "react-icons/bi";

import { deleteTask, toggleTask } from "../utils/task.util";
import { useTaskContext } from "../contexts/TaskContext";

type TaskItemProps = {
  id: string;
  taskName: string;
  isDone: boolean;
};

/**
 * Renders a single task item with its name, completion status, and delete/edit buttons.
 * @param {TaskItemProps} props - The props object containing the task item's id, name, and completion status.
 * @returns {JSX.Element} - The JSX element representing the task item.
 */
export function TaskItem({ id, taskName, isDone }: TaskItemProps): JSX.Element {
  const [isDoneTask, setIsDoneTask] = useState(isDone);
  const { setIsModified } = useTaskContext();

  async function handleDelete(id: string) {
    await deleteTask(id);

    setIsModified(true);
  }

  async function handleToggle(id: string, isDone: boolean) {
    await toggleTask(id, isDone);

    setIsModified(true);
  }

  useEffect(() => {
    setIsDoneTask(isDone);
  }, [isDone]);

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:px-5 py-1 gap-y-2 mb-2">
      <div className="md:col-span-10 flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isDoneTask}
          onChange={() => handleToggle(id, isDoneTask)}
        />

        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-300 line-clamp-1 text-ellipsis overflow-hidden text-lg"
        >
          {taskName}
        </label>
      </div>

      <div className="md:col-span-2 flex pl-5 md:justify-center items-center gap-5 md:gap-3 text-xl">
        <Link to={`/tasks/${id}/edit`} aria-label="Edit button">
          <BiEdit className="cursor-pointer text-slate-300 hover:text-slate-400" />
        </Link>

        <BiTrash
          className="cursor-pointer text-slate-300 hover:text-slate-400"
          aria-label="Delete button"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}
