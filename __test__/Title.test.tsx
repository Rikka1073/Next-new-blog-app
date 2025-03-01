import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Title from "../components/Title";
import Header from "../components/Header";
import Button from "../features/Home/Button";
import SubTitle from "../features/Home/SubTitle";
import Card from "../components/Card";

jest.mock("../api/article/fetchArticle", () => ({
  fetchArticle: jest.fn().mockResolvedValue({
    data: [
      {
        id: "1",
        title: "title",
        url: "url",
        likes_count: 1,
        page_views_count: 1,
        eyecatch: {
          url: "url",
        },
      },
    ],
  }),
}));

jest.mock("../api/blog/fetchBlog", () => ({
  fetchBlog: jest.fn().mockResolvedValue({
    data: [
      {
        id: "1",
        title: "title",
        url: "url",
        likes_count: 1,
        page_views_count: 1,
        eyecatch: {
          url: "url",
        },
      },
    ],
  }),
}));

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
  });
});

describe("SubTitle", () => {
  it("サブタイトルがあること", async () => {
    render(<SubTitle>Article</SubTitle>);
    await waitFor(() => {
      const subtitle = screen.getByTestId("sub-title");
      expect(subtitle).toHaveTextContent("Article");
    });
  });
});

describe("Card", () => {
  it("記事の一覧が4つあること", async () => {
    const data = [
      {
        id: "1",
        title: "一つ目の記事",
        url: "url",
        likes_count: 1,
        page_views_count: 1,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "2",
        title: "二つ目の記事",
        url: "url",
        likes_count: 2,
        page_views_count: 2,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "3",
        title: "三つ目の記事",
        url: "url",
        likes_count: 3,
        page_views_count: 3,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "4",
        title: "四つ目の記事",
        url: "url",
        likes_count: 4,
        page_views_count: 4,
        eyecatch: {
          url: "url",
        },
      },
    ];
    render(<Card data={data} url="article" />);
    await waitFor(() => {
      const card = screen.getAllByTestId("card");
      expect(card).toHaveLength(4);
    });
  });
  it("Blogの一覧が4つあること", async () => {
    const data = [
      {
        id: "1",
        title: "一つ目のブログ",
        url: "url",
        likes_count: 1,
        page_views_count: 1,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "2",
        title: "二つ目のブログ",
        url: "url",
        likes_count: 2,
        page_views_count: 2,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "3",
        title: "三つ目のブログ",
        url: "url",
        likes_count: 3,
        page_views_count: 3,
        eyecatch: {
          url: "url",
        },
      },
      {
        id: "4",
        title: "四つ目のブログ",
        url: "url",
        likes_count: 4,
        page_views_count: 4,
        eyecatch: {
          url: "url",
        },
      },
    ];
    render(<Card data={data} url="article" />);
    await waitFor(() => {
      const card = screen.getAllByTestId("card");
      expect(card).toHaveLength(4);
      expect(card[0]).toHaveTextContent("一つ目のブログ");
      expect(card[1]).toHaveTextContent("二つ目のブログ");
      expect(card[2]).toHaveTextContent("三つ目のブログ");
      expect(card[3]).toHaveTextContent("四つ目のブログ");
    });

    screen.debug();
  });
});
