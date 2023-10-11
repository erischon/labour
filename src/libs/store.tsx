import { create } from "zustand";

export type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

export const useTask = create<{
  task: Task[];
  allTask: Task[];
  setAllTask: (task: Task[]) => void;
}>((set) => ({
  task: [],
  allTask: [],
  setAllTask: (task: Task[]) => set({ allTask: task }),
}));
