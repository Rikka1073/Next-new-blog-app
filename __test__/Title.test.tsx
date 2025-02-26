import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Title from "../components/Title";

describe("Title", () => {
  it("タイトルがあること", async () => {
    render(<Title />);
    await waitFor(() => {
      const title = screen.getByTestId("title");
      expect(title).toBeInTheDocument();
    });
    screen.debug();
  });
});
