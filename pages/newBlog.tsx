import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const NewBlog: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
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

        <form onSubmit={onSubmit} autoComplete="off" className="space-y-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="title" className="text-3xl">
              Title
            </label>
            <div className="max-w-xs bg-black rounded-full">
              <input
                id="title"
                type="text"
                className="input text-xl"
                placeholder="title for new blog"
                value={formData.title}
                onChange={(e) => handle(e)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="author" className="text-3xl">
              Author
            </label>
            <div className="max-w-xs bg-black rounded-full">
              <input
                id="author"
                type="text"
                className="input text-xl h-full"
                placeholder="write your name"
                value={formData.author}
                onChange={(e) => handle(e)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="body" className="text-3xl">
              Body
            </label>
            <div className="max-w-lg bg-black rounded-full">
              <textarea
                id="body"
                className="input text-xl px-8 py-4"
                placeholder="describe the blog here"
                value={formData.body}
                onChange={(e) => handle(e)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            // disabled={!formData.title || !formData.author || !formData.body}
            className="bg-white shadow-md rounded-full px-6 py-2 mt-4 hover:shadow-lg hover:-translate-y-1 hover:-translate-x-1 transition duration-300 hover:bg-black hover:text-white active:translate-x-0 active:translate-y-0"
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
