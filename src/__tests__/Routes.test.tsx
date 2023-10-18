import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createBrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

import RootRoute from "../routes/Root.route.tsx";
import TasksRoute from "../routes/Tasks.route.tsx";

describe("RootRoute", () => {
  it("should render the RootRoute component", () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <RootRoute />,
      },
    ]);

    render(
      <MemoryRouter router={router}>
        <RootRoute />
      </MemoryRouter>
    );

    expect(screen.getByText("Tasks")).not.toBeNull();
  });
});

describe("TasksRoute", () => {
  it("should render the TasksRoute component", () => {
    const router = createBrowserRouter([
      {
        path: "/tasks",
        element: <TasksRoute />,
      },
    ]);

    render(
      <MemoryRouter router={router}>
        <TasksRoute />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).not.toBeNull();
  });
});
