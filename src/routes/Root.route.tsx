import { TaskContextProvider } from "../contexts/TaskContext.tsx";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import MainPage from "../pages/Main.page.tsx";

/**
 * Renders the root route of the application.
 *
 * @returns A React component representing the root route.
 */
export default function RootRoute() {
  return (
    <>
      <TaskContextProvider>
        <div className="w-full min-h-screen flex flex-col justify-between">
          <Header />

          <div className="flex flex-1">
            <MainPage />
          </div>

          <Footer />
        </div>
      </TaskContextProvider>
    </>
  );
}
