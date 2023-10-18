import { vi, beforeEach } from "vitest";

beforeEach(() => {
  vi.mock("react-router-dom", async () => {
    const actual: any = await vi.importActual("react-router-dom");

    return {
      ...actual,
      Link: ({ children }: { children: React.ReactNode }) => (
        <a href="/">{children}</a>
      ),
    };
  }); // do something
});
