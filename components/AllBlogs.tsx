import Link from "next/link";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-7xl px-8 my-3">All Blogs</h1>

      {loading ? <div className="m-10 four-dots"></div> : <div></div>}
      <div>
        {data &&
          data.map((index) => (
            <div key={index.id}>
              <h1>{index.title}</h1>
              <Link href={`/detail/${index.id}`}>
                <span className="text-blue-400 cursor-pointer">detail</span>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllBlogs;
