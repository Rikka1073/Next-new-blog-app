import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Title from "../components/Title";
import Header from "../components/Header";
import Page from "../app/page";

describe("Title", () => {
  it("タイトルがあること", async () => {
    render(<Title>HOME</Title>);
    await waitFor(() => {
      const title = screen.getByTestId("title");
      expect(title).toHaveTextContent("HOME");
    });
  });
});

describe("Header", () => {
  it("ヘッダーがあること", async () => {
    render(<Header />);
    await waitFor(() => {
      const header = screen.getByTestId("header");
      expect(header).toBeVisible();
    });
    screen.debug();
  });
});
