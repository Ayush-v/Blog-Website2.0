import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async function getAllBlogs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allblogs = await prisma.blog.findMany({});

  if (!allblogs) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Cache-Control",
      "s-maxage=1000000000 , stale-while-revalidate"
    );
    res.send(JSON.stringify({ message: "nothing found" }));
    return;
  }

  return res.json(allblogs);
}
