import Title from "../../components/Title";
import Card from "../../components/Card";
import fetchArticle from "../../api/article/fetchArticle";

const page = async () => {
  const articleData = await fetchArticle();
  return (
    <>
      <Title>Article一覧</Title>
      <Card data={articleData} url="article" />
    </>
  );
};

export default page;
