import { useLoaderData } from "react-router-dom";

import { TaskContextProvider } from "../contexts/TaskContext.tsx";
import { ModalContextProvider } from "../contexts/ModalContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function TasksRoute() {
  const tasks = useLoaderData();

  console.log(tasks);
  return (
    <>
      <TaskContextProvider>
        <ModalContextProvider>
          <div className="w-full h-screen flex flex-col justify-between">
            <Header />

            <div className="flex flex-1">tasks route</div>

            <Footer />
          </div>
        </ModalContextProvider>
      </TaskContextProvider>
    </>
  );
}
