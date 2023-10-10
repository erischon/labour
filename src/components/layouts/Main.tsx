import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { BiEdit, BiTrash } from "react-icons/bi";

import { db } from "../../libs/firebase";
import FormAddTask from "../FormAddTask";
import Modal from "../Modal";

type Task = {
  id?: string;
  taskName?: string;
  createdAt?: Date;
};

/**
 * @description Main layout
 * @version 1.0.0
 */
export default function Main() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const navigate = useNavigate();

  // Add a new task with a generated id.
  async function addTask(e: any) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        taskName: task,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      setTask("");
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  }

  // Get all tasks.
  async function getAllTasks() {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const tasksData: Task[] = [];

    querySnapshot.forEach((doc) => {
      tasksData.push({ id: doc.id, ...doc.data() });
    });

    setTasks(tasksData);
  }

  // Delete a task.
  async function deleteTask(id: string) {
    await deleteDoc(doc(db, "tasks", id));

    return navigate("/");
  }

  useEffect(() => {
    if (!tasks.length) {
      getAllTasks();
    }
  }, [tasks.length]);

  return (
    <main>
      <FormAddTask setTask={setTask} addTask={addTask} />

      {tasks?.map((task) => (
        <div key={task.id} className="flex justify-start items-center">
          <p>{task.taskName}</p>

          <BiTrash
            className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
            onClick={() => deleteTask(task.id)}
          />

          <BiEdit />
        </div>
      ))}
    </main>
  );
}
