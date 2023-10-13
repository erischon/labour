import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import { HiPencilSquare } from "react-icons/hi2";
import { MdAddTask } from "react-icons/md";

import { db } from "../../libs/firebase";
import Modal from "../Modal";
import FormAddTask from "../FormAddTask";
import FormEditTask from "../FormEditTask";
import { useModalContext } from "../../contexts/ModalContext";

export default function Header() {
  const { open, setOpen, openEdit, setOpenEdit } = useModalContext();
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
      <Modal open={open} onClose={() => setOpen(false)} title="Add Task">
        <FormAddTask
          setTask={setTask}
          addTask={addTask}
          onClose={() => setOpen(false)}
        />
      </Modal>

      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit Task"
      >
        <FormEditTask
          setTask={setTask}
          addTask={addTask}
          onClose={() => setOpen(false)}
        />
      </Modal>

      <header className="flex justify-between items-center w-full px-10 py-5 max-w-5xl mx-auto">
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
          className="py-2 px-6 bg-slate-500 flex items-center gap-2"
          onClick={() => setOpen(true)}
        >
          <div className="text-xl text-slate-100">
            <MdAddTask />
          </div>
          Add Task
        </button>
      </header>
    </>
  );
}
