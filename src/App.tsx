import { TaskContextProvider } from "./contexts/TaskContext.tsx";
import { ModalContextProvider } from "./contexts/ModalContext.tsx";

import Main from "./pages/Main";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <TaskContextProvider>
        <ModalContextProvider>
          <div>
            <Header />

            <Main />

            <Footer />
          </div>
        </ModalContextProvider>
      </TaskContextProvider>
    </>
  );
}

export default App;
