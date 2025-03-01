import Link from "next/link";

const Header = () => {
  return (
    <header data-testid="header">
      <div className="mb-20 flex items-center justify-between border-b-2 border-[#75593D] p-6 text-[#75593D]">
        <p className="text-xl">Tech Blog</p>
        <nav className="flex justify-center gap-4">
          <Link
            href="/"
            className="text-xl hover:underline hover:underline-offset-2"
          >
            Home
          </Link>
          <Link
            href="/article"
            className="text-xl hover:underline hover:underline-offset-2"
          >
            Article
          </Link>
          <Link
            href="/blog"
            className="text-xl hover:underline hover:underline-offset-2"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
