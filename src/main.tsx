import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootRoute from "./routes/Root.route.tsx";
import TasksRoute from "./routes/Tasks.route.tsx";
import ErrorPage from "./error-page.tsx";

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
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
