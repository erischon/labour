import { doc, updateDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import { db } from "../libs/firebase";

import { getTask } from "../libs/getTask";
import FormEditTask from "../components/FormEditTask";

export async function loader({ params }: { params: { id: string } }) {
  const task = await getTask(params.id);
  const id = params.id;

  return { task, id };
}

export default function EditTask() {
  const { task, id } = useLoaderData() as {
    task: { taskName: string; id: string };
    id: string;
  };

  // Add a new task with a generated id.
  async function editTask(updatedTask: string) {
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
