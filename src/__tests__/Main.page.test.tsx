import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import MainPage from "../pages/Main.page";

import { TaskContextProvider } from "../contexts/TaskContext";

describe("MainPage", () => {
  it("should render the title Tasks and the title Actions", () => {
    // Arrange
    render(
      <TaskContextProvider>
        <MainPage />
      </TaskContextProvider>
    );

    // Act
    const tasksTitle = screen.queryByText("Tasks");
    const actionsTitle = screen.queryByText("Actions");

    // Assert
    expect(tasksTitle).toBeInTheDocument();
    expect(actionsTitle).toBeInTheDocument();
  });
});
