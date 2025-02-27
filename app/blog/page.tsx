import Title from "../../components/Title";
import Card from "../../components/Card";
import fetchBlog from "../../api/blog/fetchBlog";

const page = async () => {
  const blogData = await fetchBlog();

  return (
    <>
      <Title>Blog一覧</Title>
      <Card data={blogData} url="blog" />
    </>
  );
};

export default page;
