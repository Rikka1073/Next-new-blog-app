const fetchArticle = async ({ limit }: { limit: number }) => {
  const data = await fetch(
    `https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=${limit}`,
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
  return articleData;
};

export default fetchArticle;
