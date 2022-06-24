import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const NewBlog: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
  });

  const handle = (e: any) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  async function onSubmit(e: any) {
    e.preventDefault();
    retsd();
  }

  const retsd = async () => {
    try {
      await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          body: formData.body,
        }),
      });
      setFormData({ title: "", author: "", body: "" });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Create Blog</title>
      </Head>

      <div>
        <h1 className="text-7xl px-8 my-3">Create New Blog</h1>

        <form onSubmit={onSubmit} autoComplete="off">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-3xl">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="border-2 rounded-full p-2 px-4"
              placeholder="title for new blog"
              value={formData.title}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="text-3xl">
              Author
            </label>
            <input
              id="author"
              type="text"
              className="border-2 rounded-full p-2 px-4"
              placeholder="title for new blog"
              value={formData.author}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="body" className="text-3xl">
              Body
            </label>
            <input
              id="body"
              type="text"
              className="border-2 rounded-full p-2 px-4"
              placeholder="title for new blog"
              value={formData.body}
              onChange={(e) => handle(e)}
            />
          </div>
          <button
            type="submit"
            disabled={!formData.title || !formData.author || !formData.body}
            className="bg-white shadow-md rounded-full px-6 py-2 mt-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
