import type { NextPage } from "next";
import Head from "next/head";
import AllBlogs from "../components/AllBlogs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <AllBlogs />
      </div>
    </>
  );
};

export default Home;
