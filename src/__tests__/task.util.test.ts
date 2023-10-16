import { vi, expect, it } from "vitest";

import {
  addTask,
  deleteTask,
  getAllTasks,
  getTask,
  editTask,
  toggleTask,
} from "../utils/task.util";

vi.mock("localStorage");

it("should add a new task to local storage", async () => {
  const task = "New Task";

  await addTask(task);

  expect(localStorage.setItem).toHaveBeenCalled();
});

it("should delete a task from local storage by its ID", async () => {
  const id = "1234567890";

  await deleteTask(id);

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "tasks",
    JSON.stringify([])
  );
});

it("should retrieve all tasks from local storage", async () => {
  const tasks = [
    {
      id: "1234567890",
      taskName: "Task 1",
      createdAt: new Date(),
      isDone: false,
    },
    {
      id: "abcdefghijkl",
      taskName: "Task 2",
      createdAt: new Date(),
      isDone: true,
    },
  ];

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const allTasks = await getAllTasks();

  expect(allTasks).toEqual(tasks);
});

it("should retrieve a task from local storage by its ID", async () => {
  const id = "1234567890";
  const task = {
    id: id,
    taskName: "Task 1",
    createdAt: new Date(),
    isDone: false,
  };

  localStorage.setItem("tasks", JSON.stringify([task]));

  const retrievedTask = await getTask(id);

  expect(retrievedTask).toEqual(task);
});

it("should edit a task with the updated task name", async () => {
  const id = "1234567890";
  const updatedTask = "Updated Task 1";

  const task = {
    id: id,
    taskName: "Task 1",
    createdAt: new Date(),
    isDone: false,
  };

  localStorage.setItem("tasks", JSON.stringify([task]));

  await editTask(id, updatedTask);

  const editedTask = await getTask(id);

  expect(editedTask.taskName).toEqual(updatedTask);
});

it("should toggle the isDone property of a task", async () => {
  const id = "1234567890";
  const isDone = true;

  const task = {
    id: id,
    taskName: "Task 1",
    createdAt: new Date(),
    isDone: false,
  };

  localStorage.setItem("tasks", JSON.stringify([task]));

  await toggleTask(id, isDone);

  const toggledTask = await getTask(id);

  expect(toggledTask.isDone).toEqual(!isDone);
});
