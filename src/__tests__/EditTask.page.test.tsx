import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithRouter } from "./utils";

import { TaskContextProvider } from "../contexts/TaskContext";

import EditTaskPage from "../pages/EditTask.page";

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useLoaderData: () => ({
      task: {
        id: "1",
        taskName: "Task 1",
        createdAt: new Date(),
        isDone: false,
      },
      id: "1",
    }),
  };
});

describe("EditTaskPage", () => {
  it("should render the title Edit Task", () => {
    // Arrange
    renderWithRouter(
      <TaskContextProvider>
        <EditTaskPage />
      </TaskContextProvider>
    );

    // Act
    const title = screen.queryByText("Edit Task");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("should render an input box", () => {});

  it("should render a button", () => {});
});
