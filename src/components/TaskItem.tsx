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
    <div className="grid grid-cols-12 px-5 py-1">
      <div className="col-span-10 flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isDoneTask}
          onChange={() => handleToggle(id, isDoneTask)}
        />

        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 line-clamp-1"
        >
          {taskName}
        </label>
      </div>

      <div className="col-span-2 flex gap-3 items-center justify-center">
        <Link to={`/tasks/${id}/edit`}>
          <BiEdit className="cursor-pointer text-slate-300 text-lg hover:text-slate-400" />
        </Link>

        <BiTrash
          className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}
