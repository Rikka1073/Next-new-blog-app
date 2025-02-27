import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="mb-20 border-b-2 border-[#75593D] p-6">
        <nav className="flex justify-center gap-4">
          <Link href="/" className="text-xl">
            Home
          </Link>
          <Link href="/article" className="text-xl">
            Article
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
