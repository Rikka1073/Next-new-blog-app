import Link from "next/link";

const Button = ({ url }) => {
  return (
    <div className="text-center">
      <Link href={url}>
        <div className="btn btn-outline btn-wide rounded-lg border-[#75593D] text-[#75593D] hover:border-2 hover:text-[16px] bg-[#F1E9DA]">
          もっと見る
        </div>
      </Link>
    </div>
  );
};

export default Button;
