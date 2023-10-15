import { collection, addDoc } from "firebase/firestore";

import { db } from "../libs/firebase";

import FormAddTask from "../components/FormAddTask";

/**
 * Renders the AddTask component.
 * @returns JSX element
 */
export default function AddTask() {
  /**
   * Adds a new task to the database.
   * @param task - The task to be added.
   */
  async function addTask(task: string) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        taskName: task,
        createdAt: new Date(),
        isDone: false,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  }

  return (
    <div className="flex justify-center flex-1 w-full mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-5">Add Task</h1>

        <FormAddTask addTask={addTask} />
      </div>
    </div>
  );
}
