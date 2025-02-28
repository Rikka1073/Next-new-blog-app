import { client } from "../../libs/microcms";

type Blog = {
  limit: number;
  id: string;
};

const fetchBlog = async ({ limit, id }: Blog) => {
  const data = await client.get({
    endpoint: "blogs",
    queries: {
      limit: limit,
      fields: "id,title,createdAt,eyecatch,content",
      ids: id,
    },
  });

  if (!data.contents) {
    throw new Error("No data");
  }
  return data.contents;
};

export default fetchBlog;
