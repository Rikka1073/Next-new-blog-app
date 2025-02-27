import Link from "next/link";
import { client } from "../../libs/microcms";
import Image from "next/image";
import Title from "../../components/Title";

const page = async () => {
  const fetchData = async () => {
    const data = await client.get({
      endpoint: "blogs",
      queries: { fields: "id,title,createdAt,eyecatch" },
    });
    if (!data.contents) {
      throw new Error("No data");
    }
    console.log(data.contents);
    return data.contents;
  };

  const data = await fetchData();

  return (
    <>
      <Title>Blog一覧</Title>
      <div className="grid gap-4 px-[10%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
        {data.map((data) => {
          return (
            <Link key={data.id} href={`/blog/${data.id}`}>
              <div className="card bg-base-100 h-80 shadow-xl">
                <Image
                  src={data.eyecatch.url}
                  sizes="100vw"
                  width={300}
                  height={300}
                  alt=""
                  className="h-1/2"
                  priority={true}
                />
                <div className="card-body h-1/2">
                  <h2 className="card-title">
                    {data.title.length > 30
                      ? data.title.substring(0, 30) + "..."
                      : data.title}
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
