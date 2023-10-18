import { useLoaderData } from "react-router-dom";

import FormEditTask from "../components/FormEditTask";

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

/**
 * Renders the EditTask page component.
 * @returns JSX element
 */
export default function EditTaskPage() {
  const { task, id } = useLoaderData() as { task: Task; id: string };

  return (
    <div className="flex justify-center flex-1 w-full mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-5">Edit Task</h1>

        <FormEditTask task={task} id={id} />
      </div>
    </div>
  );
}
