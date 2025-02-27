import Title from "../../components/Title";
import fetchData from "../../api/blog/fetchBlog";
import Card from "../../components/Card";

const page = async () => {
  const blogData = await fetchData();

  return (
    <>
      <Title>Blog一覧</Title>
      <Card data={blogData} url="blog" />
    </>
  );
};

export default page;
