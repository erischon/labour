import { useLoaderData } from "react-router-dom";

import { TaskContextProvider } from "../contexts/TaskContext.tsx";
import { ModalContextProvider } from "../contexts/ModalContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import Main from "../pages/Main.tsx";

export default function RootRoute() {
  const tasks = useLoaderData();

  console.log(tasks);
  return (
    <>
      <TaskContextProvider>
        <ModalContextProvider>
          <div className="w-full h-screen flex flex-col justify-between">
            <Header />

            <div className="flex flex-1">
              <Main />
            </div>

            <Footer />
          </div>
        </ModalContextProvider>
      </TaskContextProvider>
    </>
  );
}
