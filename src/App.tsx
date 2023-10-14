import { TaskContextProvider } from "./contexts/TaskContext.tsx";
import { ModalContextProvider } from "./contexts/ModalContext.tsx";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./pages/Main.tsx";

function App() {
  return (
    <>
      <TaskContextProvider>
        <ModalContextProvider>
          <div className="w-full h-screen flex flex-col justify-between">
            <Header />

            <div className="flex-1">
              <Main />
            </div>

            <Footer />
          </div>
        </ModalContextProvider>
      </TaskContextProvider>
    </>
  );
}

export default App;
