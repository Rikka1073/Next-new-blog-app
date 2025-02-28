import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Title from "../components/Title";
import Header from "../components/Header";
import Button from "../features/Home/Button";
import SubTitle from "../features/Home/SubTitle";

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
  });
});

describe("Button", () => {
  it("もっと見るボタンがあること", async () => {
    render(<Button url="url" />);
    await waitFor(() => {
      const button = screen.getByTestId("button");
      expect(button).toHaveTextContent("もっと見る");
    });
    screen.debug();
  });
});

describe("SubTitle", () => {
  it("サブタイトルがあること", async () => {
    render(<SubTitle>Article</SubTitle>);
    await waitFor(() => {
      const subtitle = screen.getByTestId("sub-title");
      expect(subtitle).toHaveTextContent("Article");
    });
    screen.debug();
  });
});
