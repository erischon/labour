import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "../components/layouts/Header";

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");

  return {
    ...actual,
    Link: ({ children }: { children: React.ReactNode }) => (
      <a href="/">{children}</a>
    ),
  };
});

describe("Header", () => {
  it("renders a link to the Main page", () => {
    // Arrange
    render(<Header />);

    // Act
    const link = screen.queryByText("Home");

    // Assert
    expect(link).toBeInTheDocument();
  });
});
