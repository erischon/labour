import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";

import ErrorPage from "../pages/Error.page";

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useRouteError: () => new Error("test error"),
  };
});

describe("ErrorPage", () => {
  it("should render apologies", () => {
    // Arrange
    render(<ErrorPage />);

    // Act
    const apologies = screen.queryByText(
      "Sorry, an unexpected error has occurred."
    );

    console.log("======", apologies);

    // Assert
    expect(apologies).not.toBeNull();
  });
});
