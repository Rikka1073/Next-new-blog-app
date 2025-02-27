import Title from "../../components/Title";
import Card from "../../components/Card";

const page = async () => {
  const data = await fetch(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=20",
    {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
      },
    },
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const articleData = await data.json();

  return (
    <>
      <Title>Article一覧</Title>
      <Card data={articleData} url="article" />
    </>
  );
};

export default page;
