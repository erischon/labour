import { TaskContextProvider } from "../contexts/TaskContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import { Outlet } from "react-router-dom";

export default function TasksRoute() {
  return (
    <>
      <TaskContextProvider>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />

          <Outlet />

          <Footer />
        </div>
      </TaskContextProvider>
    </>
  );
}
