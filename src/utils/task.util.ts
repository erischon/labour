import { doc, updateDoc } from "firebase/firestore";

import { db } from "../libs/firebase";

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

/**
 * Adds a new task to the local storage.
 * @param task - The name of the task to be added.
 * @returns A Promise that resolves with void when the task is added to the local storage.
 */
export async function addTask(task: string): Promise<void> {
  const oldTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const newTask = {
    id: Math.random().toString(36).slice(2, 14),
    taskName: task,
    createdAt: new Date(),
    isDone: false,
  };

  const newTasks = [...oldTasks, newTask];

  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

/**
 * Deletes a task from local storage by its ID.
 * @param id - The ID of the task to be deleted.
 * @returns A Promise that resolves with void when the task is deleted.
 */
export async function deleteTask(id: string) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const newTasks = tasks.filter((task: Task) => task.id !== id);

  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

/**
 * Edits a task with the updated task name.
 * @param updatedTask - The updated task name.
 * @returns Promise<void>
 */
export async function editTask(id: string, updatedTask: string): Promise<void> {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const task = tasks.find((task: Task) => task.id === id);

  const taskIndex = tasks.findIndex((task: Task) => task.id === id);

  tasks[taskIndex] = { ...task, taskName: updatedTask };

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Retrieves all tasks from local storage.
 * @returns {Promise<Array>} An array of tasks.
 */
export async function getAllTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  return tasks;
}

/**
 * Retrieves a task from local storage by its ID.
 * @param id - The ID of the task to retrieve.
 * @returns The task object if found, otherwise logs an error message to the console.
 */
export async function getTask(id: string) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const task = tasks.find((task: Task) => task.id === id);

  return task ? task : console.log("No such document!");
}

/**
 * Toggles the isDone property of a task in the "tasks" collection in Firestore.
 * @param id The ID of the task to toggle.
 * @param isDone The current value of the task's isDone property.
 */
export async function toggleTask(id: string, isDone: boolean) {
  const docRef = doc(db, "tasks", id);

  await updateDoc(docRef, {
    isDone: !isDone,
  });
}
