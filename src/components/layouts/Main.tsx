import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../libs/firebase";

type Task = {
  taskName: string;
  createdAt: Date;
};

export default function Main() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // Add a new task with a generated id.
  async function addTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        taskName: task,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  }

  // Get all tasks from firestore.
  async function getTasks() {
    const tasksSnapshot = await getDocs(collection(db, "tasks"));

    const tasksList = tasksSnapshot.docs.map((doc) => doc.data());

    return tasksList;
  }

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, [tasks]);

  return (
    <main>
      <h1>main</h1>

      <input
        type="text"
        placeholder="What do you have to do today?"
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit" onClick={addTask}>
        add task
      </button>

      {tasks?.map((task) => (
        <div key={task.taskName}>
          <p>{task.taskName}</p>
        </div>
      ))}
    </main>
  );
}
