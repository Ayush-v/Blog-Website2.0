import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-7xl px-8 my-3">About Page</h1>

        <p>
          Welcome to my blog! This blog is built using Nextjs, Prisma, Mongodb,
          and Typescript. I am a web developer and I love to share my knowledge
          with others. I hope you enjoy the content on this site. Thanks for
          visiting!
        </p>
      </div>
    </>
  );
};

export default About;
