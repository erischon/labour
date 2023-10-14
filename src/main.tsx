import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootRoute from "./routes/Root.route.tsx";
import TasksRoute from "./routes/Tasks.route.tsx";
import ErrorPage from "./error-page.tsx";
import { loader as taskLoader } from "./pages/EditTask.tsx";

import AddTask from "./pages/AddTask.tsx";
import EditTask from "./pages/EditTask.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasks",
    element: <TasksRoute />,
    children: [
      {
        path: "add",
        element: <AddTask />,
      },
      {
        path: ":id/edit",
        element: <EditTask />,
        loader: taskLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
