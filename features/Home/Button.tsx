import Link from "next/link";

const Button = ({ url }) => {
  return (
    <div className="text-center" data-testid="button">
      <Link href={url}>
        <div className="btn btn-outline btn-wide rounded-lg border-[#75593D] bg-[#F1E9DA] text-[#75593D] hover:border-2 hover:text-[16px]">
          もっと見る
        </div>
      </Link>
    </div>
  );
};

export default Button;
