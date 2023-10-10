import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../libs/firebase";

export default function Main() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);

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

  // Get all tasks.
  async function getAllTasks() {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const taskData: any = [];

    querySnapshot.forEach((doc) => {
      taskData.push({ id: doc.id, ...doc.data() });
    });

    setTasks(taskData);
  }

  useEffect(() => {
    if (!tasks.length) {
      getAllTasks();
    }
  }, []);

  return (
    <main>
      <div className="flex gap-2">
        <input
          className="text-black p-2"
          type="text"
          placeholder="What do you have to do today?"
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit" onClick={addTask}>
          add task
        </button>
      </div>

      {tasks?.map((task) => (
        <div key={task.id}>
          <p>{task.taskName}</p>
        </div>
      ))}
    </main>
  );
}
