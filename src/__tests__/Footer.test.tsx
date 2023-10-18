import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "../components/layouts/Footer";

describe("Footer", () => {
  it("renders the current year in the copyright", () => {
    // Arrange
    render(<Footer />);
    const currentYear = new Date().getFullYear();

    // Act
    const yearText = screen.getByText(
      `© 2023-${currentYear} Eri Schön All rights reserved`
    );

    // Assert
    expect(yearText).toBeTruthy();
  });
});
