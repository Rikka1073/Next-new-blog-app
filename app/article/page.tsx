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
    likes_count: number;
    page_views_count: number;
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 px-[10%] xl:px-0 lg:grid-cols-4">
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
                  <div className="card-body h-1/2">
                    <h2 className="card-title">
                      {data.title.length > 30 ? data.title.substring(0, 30) + "..." : data.title}
                    </h2>
                    <div className="flex gap-2">
                      {/* <p className="flex-grow-0">Likes {data.likes_count}</p> */}
                      <div className="badge badge-sm border-black text-[10px] lg:text-xs">
                        Likes {data.likes_count}
                      </div>
                      {/* <p className="flex-grow-0 ">Views {data.page_views_count}</p> */}
                      <div className="badge badge-sm border-black text-[10px] lg:text-xs">
                        Views {data.page_views_count}
                      </div>
                    </div>
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
