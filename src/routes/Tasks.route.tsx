import { TaskContextProvider } from "../contexts/TaskContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import { Outlet } from "react-router-dom";

/**
 * Renders the Tasks route, which includes a header, a footer, and the main content area.
 * Uses the TaskContextProvider to provide task-related data to child components.
 * @returns The Tasks route component.
 */
export default function TasksRoute() {
  return (
    <>
      <TaskContextProvider>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />

          <div className="flex-1">
            <Outlet />
          </div>

          <Footer />
        </div>
      </TaskContextProvider>
    </>
  );
}
