import { collection, addDoc } from "firebase/firestore";

import { db } from "../libs/firebase";
import { TaskContextProvider } from "../contexts/TaskContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import FormAddTask from "../components/FormAddTask";

export default function TasksRoute() {
  // Add a new task with a generated id.
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
    <>
      <TaskContextProvider>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />

          <div className="flex-1">
            <h1>Add Task</h1>
            <FormAddTask addTask={addTask} />
          </div>

          <Footer />
        </div>
      </TaskContextProvider>
    </>
  );
}
