import Link from "next/link";
import fetchArticle from "../api/article/fetchArticle";
import fetchBlog from "../api/blog/fetchBlog";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../features/Button";

export default async function Page() {
  const articleData = await fetchArticle({ limit: 4 });
  const blogData = await fetchBlog({ limit: 4, id: "" });
  return (
    <>
      <Title>HOME</Title>
      <div className="leading-loose mb-10 px-[10%]">
        <p className="text-center text-[#75593D]">
          エンジニアとして4年間、さまざまな技術に触れながら試行錯誤してきました。
        </p>
        <p className="text-center text-[#75593D]">
          このブログでは、日々の開発で得た知見や、挑戦した技術について記事をまとめています。
        </p>
        <p className="text-center text-[#75593D]">
          深掘りした技術記事（Article）と、日々の学びや気づきを綴ったブログ（Blog）をそれぞれ4つずつ掲載しています。
        </p>
        <p className="text-center text-[#75593D]">
          新しい技術に触れたい方や、同じ課題に直面しているエンジニアの参考になれば幸いです。
        </p>
      </div>
      <div className="mb-15">
        <h2 className="text-lg text-center mb-5 text-[#75593D] font-bold">
          Article
        </h2>
        <div className="mb-4">
          <Card data={articleData} url="article" />
        </div>
        <Button url="/article" />
      </div>
      <div>
        <h2 className="text-lg text-center mb-5 text-[#75593D] font-bold">
          Blog
        </h2>
        <div className="mb-4">
          <Card data={blogData} url="blog" />
        </div>
        <Button url="/blog" />
      </div>
    </>
  );
}
