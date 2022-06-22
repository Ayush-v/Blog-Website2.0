import { Props } from "next/script";
import Navbar from "./Navbar";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
