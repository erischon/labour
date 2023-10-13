import { useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import { db } from "../libs/firebase";
import { useModalContext } from "../contexts/ModalContext";

import Modal from "../components/Modal";
import FormEditTask from "../components/FormEditTask";

type EditTaskProps = {
  id: string;
};

export default function EditTask({ id }: EditTaskProps) {
  const { openEdit, setOpenEdit } = useModalContext();
  const [taskName, setTaskName] = useState("");

  async function getTask() {
    const docRef = doc(db, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTaskName(docSnap.data().taskName);
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getTask();
  }, []);

  // Add a new task with a generated id.
  async function editTask(updatedTask: string, id: string) {
    try {
      const docRef = doc(db, "tasks", id);

      await updateDoc(docRef, {
        taskName: updatedTask,
      });

      console.log("Document with ID: ", docRef.id, " is updated");
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  }

  return (
    <>
      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit Task"
      >
        <FormEditTask
          taskName={taskName}
          id={id}
          editTask={editTask}
          onClose={() => setOpenEdit(false)}
        />
      </Modal>
    </>
  );
}
