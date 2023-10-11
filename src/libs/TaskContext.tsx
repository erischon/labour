import { createContext } from "react";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContext = createContext({
  tasks: [],
});

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  return (
    <TaskContext.Provider value={{ tasks: [] }}>
      {children}
    </TaskContext.Provider>
  );
}
