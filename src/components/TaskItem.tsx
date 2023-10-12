import { BiEdit, BiTrash } from "react-icons/bi";

import { useModalContext } from "../contexts/ModalContext";

type TaskItemProps = {
  id: string;
  taskName: string;
  isDone: boolean;
  toggleTask: (id: string, complete: boolean) => void;
  deleteTask: (id: string) => void;
};

/**
 * @description TaskItem component
 * @version 1.0.0
 */
export function TaskItem({
  id,
  taskName,
  isDone,
  toggleTask,
  deleteTask,
}: TaskItemProps) {
  const { setOpenEdit } = useModalContext();

  return (
    <div className="grid grid-cols-12 px-5 py-1">
      <div className="col-span-10 flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isDone}
          onChange={(e) => toggleTask(id, e.target.checked)}
        />

        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 line-clamp-1"
        >
          {taskName}
        </label>
      </div>

      <div className="col-span-2 flex gap-3 items-center justify-center">
        <BiTrash
          className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
          onClick={() => deleteTask(id)}
        />

        <BiEdit
          className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
          onClick={() => setOpenEdit(true)}
        />
      </div>
    </div>
  );
}
