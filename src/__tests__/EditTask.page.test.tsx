import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithRouter } from "./utils";

import { TaskContextProvider } from "../contexts/TaskContext";

import EditTaskPage from "../pages/EditTask.page";

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
