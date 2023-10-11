import { useState } from "react";
import { Link } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { HiPencilSquare } from "react-icons/hi2";
import Modal from "../Modal";
import FormAddTask from "../FormAddTask";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");

  // Add a new task with a generated id.
  async function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      <Modal open={open} onClose={() => setOpen(false)}>
        <FormAddTask setTask={setTask} addTask={addTask} />
      </Modal>

      <header className="flex justify-between items-center px-10 py-5">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl">
            <HiPencilSquare />
          </span>

          <h2 className="text-2xl font-bold font-heading tracking-wider">
            Labour
          </h2>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <button
          className="py-2 px-9 bg-slate-500"
          onClick={() => setOpen(true)}
        >
          bouton
        </button>
      </header>
    </>
  );
}
