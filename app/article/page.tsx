import Link from "next/link";

const page = async () => {
  const data = await fetch("https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=20", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
    },
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const article = await data.json();
  console.log(article);

  type Article = {
    id: string;
    title: string;
    url: string;
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {article &&
          article.map((data: Article) => {
            return (
              <Link key={data.id} href={data.url}>
                <div className="card bg-base-100 shadow-xl h-80">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-md">
                      {data.title.length > 30 ? data.title.substring(0, 30) + "..." : data.title}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default page;
