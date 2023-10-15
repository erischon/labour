import { TaskContextProvider } from "../contexts/TaskContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import Main from "../pages/Main.tsx";

export default function RootRoute() {
  return (
    <>
      <TaskContextProvider>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />

          <div className="flex flex-1">
            <Main />
          </div>

          <Footer />
        </div>
      </TaskContextProvider>
    </>
  );
}
