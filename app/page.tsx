import Link from "next/link";
import fetchArticle from "../api/article/fetchArticle";
import fetchBlog from "../api/blog/fetchBlog";
import Card from "../components/Card";
import Title from "../components/Title";

export default async function Page() {
  const articleData = await fetchArticle({ limit: 4 });
  const blogData = await fetchBlog({ limit: 4 });
  return (
    <>
      <Title>HOME</Title>
      <div className="leading-loose mb-10">
        <p className="text-center text-[#75593D]">
          エンジニアとして4年間、さまざまな技術に触れながら試行錯誤してきました。
        </p>
        <p className="text-center text-[#75593D]">
          このブログでは、日々の開発で得た知見や、挑戦した技術について記事をまとめています。
        </p>
        <p className="text-center text-[#75593D]">
          TOPページでは、深掘りした技術記事（Article）と、日々の学びや気づきを綴ったブログ（Blog）をそれぞれ4つずつ掲載しています。
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
        <div className="text-center">
          <button className="btn btn-outline btn-wide rounded-lg border-[#75593D] text-[#75593D] hover:border-2 hover:text-[16px] bg-[#F1E9DA]">
            <Link href="/article">もっと見る</Link>
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-lg text-center mb-5 text-[#75593D] font-bold">
          Blog
        </h2>
        <div className="mb-4">
          <Card data={blogData} url="blog" />
        </div>
        <div className="text-center">
          <button className="btn btn-outline btn-wide rounded-lg border-[#75593D] text-[#75593D] hover:border-2 hover:text-[16px] bg-[#F1E9DA]">
            <Link href="/blog">もっと見る</Link>
          </button>
        </div>
      </div>
    </>
  );
}
