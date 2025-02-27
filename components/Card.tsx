import Image from "next/image";
import Link from "next/link";

const img = "/img/QiitaThumbnail.png";

type propsData = {
  id: string;
  title: string;
  url: string;
  likes_count: number;
  page_views_count: number;
  eyecatch: {
    url: string;
  };
};

const Card = ({ data, url }) => {
  return (
    <div className="grid gap-4 px-[10%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
      {data &&
        data.map((item: propsData) => {
          return (
            <Link
              key={item.id}
              href={url && url === "article" ? item.url : `/blog/${item.id}`}
            >
              <div className="card bg-white h-80 shadow-xl">
                <Image
                  src={url && url === "blog" ? item.eyecatch.url : img}
                  sizes="100vw"
                  width={300}
                  height={300}
                  alt=""
                  className="h-1/2 rounded-t-lg"
                  priority={true}
                />
                <div className="card-body h-1/2">
                  <h2 className="card-title">
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Card;
