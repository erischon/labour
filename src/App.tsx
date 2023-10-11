import { useState } from "react";

import Header from "./components/layouts/Header";
import Main from "./pages/Main";
import Footer from "./components/layouts/Footer";

import { TaskContextProvider } from "./libs/TaskContext";
import { Todo } from "./store";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <TaskContextProvider>
        <Header />

        <Main todos={todos} setTodos={setTodos} />

        <Footer />
      </TaskContextProvider>
    </>
  );
}

export default App;
