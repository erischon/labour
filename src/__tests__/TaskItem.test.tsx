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

describe("TaskItem", () => {
  it("", () => {
    // Arrange
    render(
      <TaskContextProvider>
        <TaskItem id="1" taskName="task" isDone={false} />
      </TaskContextProvider>
    );

    // Act
    const link = screen.queryByText("task");

    // Assert
    expect(link).toBeInTheDocument();
  });
});
