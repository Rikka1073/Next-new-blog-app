import { client } from "../../libs/microcms";

const fetchBlog = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: { limit: 20, fields: "id,title,createdAt,eyecatch" },
  });

  if (!data.contents) {
    throw new Error("No data");
  }
  console.log(data.contents);
  return data.contents;
};

export default fetchBlog;
