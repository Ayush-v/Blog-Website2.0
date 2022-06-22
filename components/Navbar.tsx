import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-end px-8 pt-8 pb-6 border-b-2 border-gray-500 max-w-screen-xl sm:mx-auto mx-3">
        <Link href="/">
          <h1 className="text-4xl cursor-pointer">Logo</h1>
        </Link>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/newBlog">Create New Blogs</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
