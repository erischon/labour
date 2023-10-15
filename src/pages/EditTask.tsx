import { doc, updateDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import { db } from "../libs/firebase";

import { getTask } from "../libs/getTask";
import FormEditTask from "../components/FormEditTask";

/**
 * Asynchronously loads the task with the given ID and returns it along with the ID.
 * @param params - An object containing the ID of the task to load.
 * @returns An object containing the loaded task and its ID.
 */
export async function loader({ params }: any) {
  const task = await getTask(params.id);
  const id = params.id;

  return { task, id };
}

/**
 * Renders the EditTask page component.
 * @returns JSX element
 */
export default function EditTask() {
  const { task, id } = useLoaderData() as {
    task: { taskName: string; id: string };
    id: string;
  };

  /**
   * Edits a task with the updated task name.
   * @param updatedTask - The updated task name.
   * @returns Promise<void>
   */
  async function editTask(updatedTask: string): Promise<void> {
    try {
      const docRef = doc(db, "tasks", id);

      await updateDoc(docRef, {
        taskName: updatedTask,
      });
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  }

  return (
    <div className="flex justify-center flex-1 w-full mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-5">Edit Task</h1>

        <FormEditTask editTask={editTask} task={task} />
      </div>
    </div>
  );
}
