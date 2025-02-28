import Image from "next/image";
import fetchBlog from "../../../api/blog/fetchBlog";
import DOMPurify from "isomorphic-dompurify";
import Title from "../../../components/Title";

const page = async ({ params }) => {
  const { id } = await params;
  const blogData = await fetchBlog({ limit: 12, id: id });

  const sanitizeText = (text: string) => {
    return DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
  };

  const formatDate = (date: string) => {
    const createdAt = new Date(date);
    const year = createdAt.getFullYear();
    const monnth = ("0" + (createdAt.getMonth() + 1)).slice(-2);
    const day = ("0" + createdAt.getDate() + 1).slice(-2);
    const formatDate = `${year}-${monnth}-${day}`;
    return formatDate;
  };

  return (
    <div>
      <Title>Blog一覧</Title>
      {blogData &&
        blogData.map((item) => (
          <div
            key={item.id}
            className="mx-auto box-content max-w-3xl px-[10%] text-[#75593D]"
          >
            <h2 className="mb-5 text-left text-lg font-bold text-[#75593D]">
              {item.title}
            </h2>
            <div className="mb-5">{formatDate(item.createdAt)}</div>
            <Image
              src={item.eyecatch.url}
              width={768}
              height={200}
              alt={item.title}
              className="mx-auto mb-5"
            />
            <div className="leading-6">{sanitizeText(item.content)}</div>
          </div>
        ))}
    </div>
  );
};

export default page;
