import { TaskContextProvider } from "./contexts/TaskContext.tsx";

import Main from "./pages/Main";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Header />

        <Main />

        <Footer />
      </TaskContextProvider>
    </>
  );
}

export default App;
