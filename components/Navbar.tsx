import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <>
      <header className="flex flex-col p-4 bg-gray-900 fixed top-0 left-0 h-screen text-white shadow-lg w-40 space-y-6">
        <Link href="/" className="pb-3">
          <div className="w-[60px] h-[60px] relative">
            <Image src="/assets/Alogo.svg" alt="logo" layout="fill" />
          </div>
        </Link>

        <nav>
          <ul className="flex flex-col gap-8 text-2xl">
            <li>
              <Link href="/">
                <div
                  className={`${
                    asPath === "/" ? "border-b-2" : ""
                  } flex items-center gap-3 cursor-pointer pb-2`}
                >
                  <HomeIcon className="w-6 h-6" />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div
                  className={`${
                    asPath === "/about" ? "border-b-2" : ""
                  } flex items-center gap-3 cursor-pointer pb-2`}
                >
                  <InformationCircleIcon className="w-6 h-6" />
                  <span>About</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/newBlog">
                <div
                  className={`${
                    asPath === "/newBlog" ? "border-b-2" : ""
                  } flex items-center gap-3 cursor-pointer pb-2`}
                >
                  <PencilAltIcon className="w-6 h-6" />
                  <span>New Blog</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
