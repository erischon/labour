import { useState, createContext, useContext } from "react";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

type TaskContext = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isModified: boolean;
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>;
};

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  isDone: boolean;
};

// Create a context object.
const TaskContext = createContext<TaskContext | null>(null); // default value for the context when you consume it outside of a provider

/**
 * Provides a context for managing tasks.
 * @param children The child components to be wrapped by the context provider.
 * @returns A JSX element that provides the task context.
 */
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModified, setIsModified] = useState<boolean>(true); // this is used to trigger a re-render when the tasks are modified

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, isModified, setIsModified }}
    >
      {children}
    </TaskContext.Provider>
  );
}

/**
 * Custom hook that returns the TaskContext object.
 * @returns {TaskContext} The TaskContext object.
 * @throws {Error} If used outside of a TaskContextProvider.
 */
export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskContextProvider");
  }

  return context;
}
