import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithRouter } from "./utils/testUtils";

import { TaskContextProvider } from "../contexts/TaskContext";

import AddTaskPage from "../pages/AddTask.page";

describe("AddTaskPage", () => {
  it("should render the title Add Task", () => {
    // Arrange
    renderWithRouter(
      <TaskContextProvider>
        <AddTaskPage />
      </TaskContextProvider>
    );

    // Act
    const title = screen.queryByText("Add Task");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("should render an input box", () => {});

  it("should render a button", () => {});
});
