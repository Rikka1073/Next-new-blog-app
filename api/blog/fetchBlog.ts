import { client } from "../../libs/microcms";

const fetchBlog = async ({ limit }: { limit: number }) => {
  const data = await client.get({
    endpoint: "blogs",
    queries: { limit: limit, fields: "id,title,createdAt,eyecatch" },
  });

  if (!data.contents) {
    throw new Error("No data");
  }
  console.log(data.contents);
  return data.contents;
};

export default fetchBlog;
