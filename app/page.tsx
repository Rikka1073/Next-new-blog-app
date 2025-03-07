import fetchArticle from "../api/article/fetchArticle";
import fetchBlog from "../api/blog/fetchBlog";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../features/Home/Button";
import SubTitle from "../features/Home/SubTitle";

export default async function Page() {
  const articleData = await fetchArticle({ limit: 4 });
  const blogData = await fetchBlog({ limit: 4, id: "" });
  return (
    <>
      <Title>HOME</Title>
      <div className="mb-10 px-[10%] leading-loose">
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
        <SubTitle>Article</SubTitle>
        <div className="mb-4">
          <Card data={articleData} url="article" />
        </div>
        <Button url="/article" />
      </div>
      <div>
        <SubTitle>Blog</SubTitle>
        <div className="mb-4">
          <Card data={blogData} url="blog" />
        </div>
        <Button url="/blog" />
      </div>
    </>
  );
}
