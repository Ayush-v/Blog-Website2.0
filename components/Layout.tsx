import { Props } from "next/script";
import Navbar from "./Navbar";

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-40 px-8">{children}</div>
    </div>
  );
};

export default Layout;
