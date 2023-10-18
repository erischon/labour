import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { TaskItem } from "../components/TaskItem";
import { TaskContextProvider } from "../contexts/TaskContext";

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");

  return {
    ...actual,
    Link: ({ children }: { children: React.ReactNode }) => (
      <a href="/">{children}</a>
    ),
  };
});

const fakeTask = {
  id: "1",
  taskName: "Fake task",
  isDone: false,
};

describe("TaskItem", () => {
  it("render the task name", () => {
    // Arrange
    render(
      <TaskContextProvider>
        <TaskItem {...fakeTask} />
      </TaskContextProvider>
    );

    // Act
    const taskName = screen.queryByText(fakeTask.taskName);

    // Assert
    expect(taskName).not.toBeNull();
  });
});
